const displayNameMiddleware = require('./displayNameMiddleware');
const emailMiddleware = require('./emailMiddleware');
const passwordMiddleware = require('./passwordMiddleware');
const alreadyUserMiddleware = require('./alreadyUserMiddleware');

module.exports = {
  displayNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  alreadyUserMiddleware,
};