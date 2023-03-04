const displayNameMiddleware = require('./displayName.middleware');
const emailMiddleware = require('./email.middleware');
const passwordMiddleware = require('./password.middleware');
const alreadyUserMiddleware = require('./alreadyUser.middleware');
const tokenMiddleware = require('./token.middleware');
const nameMiddleware = require('./name.middleware');
const categoryIdsMiddleware = require('./categoryIds.middleware');
const postFieldsMiddleware = require('./postFields.middleware');

module.exports = {
  displayNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  alreadyUserMiddleware,
  tokenMiddleware,
  nameMiddleware,
  categoryIdsMiddleware,
  postFieldsMiddleware,
};