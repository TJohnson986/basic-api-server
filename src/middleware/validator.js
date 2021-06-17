'use strict'

module.exports = (req, res, next) => {
  console.log('user middleware is running');
  if (!req.query.name) {
    next('No name on query'); // should trigger an error
  } else {
    next(); // move along to next function
  }
};

//sends req through when valid, forces error when not