'use strict';



// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('babel-register');

// Export the application
exports = module.exports = require('./app');
