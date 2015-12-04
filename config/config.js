var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'restaurant'
    },
    port: 3000,
    db: 'mongodb://localhost/restaurant-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'restaurant'
    },
    port: 3000,
    db: 'mongodb://localhost/restaurant-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'restaurant'
    },
    port: 3000,
    db: 'mongodb://localhost/restaurant-production'
  }
};

module.exports = config[env];
