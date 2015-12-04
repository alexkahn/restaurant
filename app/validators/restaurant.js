'use strict';

const Joi = require('joi');

let internals = {
  schema: Joi.object().keys({
    name: Joi.string().alphanum().required(),
    url: Joi.string().uri(),
    description: Joi.string().max(500),
    images: Joi.binary(),
    address: Joi.string().min(10),
    phone: Joi.string().min(10)
  }),
  callback: function (err, value) {
    if (err) {
      throw err;
    }
    return value;
  }
};

exports.validate = function(data) {
  Joi.validate(data, internals.schema, internals.callback)
}