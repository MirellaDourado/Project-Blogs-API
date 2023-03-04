const displayNameMiddleware = require('./displayName.middleware');
const emailMiddleware = require('./email.middleware');
const passwordMiddleware = require('./password.middleware');
const alreadyUserMiddleware = require('./alreadyUser.middleware');
const tokenMiddleware = require('./token.middleware');

module.exports = {
  displayNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  alreadyUserMiddleware,
  tokenMiddleware,
};