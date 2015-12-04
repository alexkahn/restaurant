'use strict';

const express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Restaurant = mongoose.model('Restaurant')
  , restaurantValidator = require('../validators/restaurant')
  ;

module.exports = function (app) {
  app.use('/restaurants', router);
};

router.get('/', function (req, res, next) {
  Restaurant.find(function (err, restaurants) {
    if (err) {
      return next(err);
    }
    return res.render('restaurants', {
      title: 'The Awesome list',
      restaurants: restaurants
    });
  });
});

router.post('/', function(req, res, next) {
  const isValid = restaurantValidator(req.body);
  if (isValid) {
    let rest = new Restaurant(req.body);
    rest.save(function(err, instance) {
      return res.render('restaurants', {
        title: 'the awesome list',
        restaurants: instance,
        message: 'You created a Restaurant!'
      });
    });
  }
});


router.put('/{id}', function(req, res, next) {
  Restaurant.find(req.params.id, function() {
    if (err) {
      next(err);
    }
    updateRestaurant();
  })
});