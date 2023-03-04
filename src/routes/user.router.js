const express = require('express');
const { userController } = require('../controller');
const {
  alreadyUserMiddleware, displayNameMiddleware,
  emailMiddleware, passwordMiddleware, tokenNotFoundMiddleware } = require('../middlewares');

const api = express.Router();

api.post('/', displayNameMiddleware, emailMiddleware, passwordMiddleware,
  alreadyUserMiddleware, userController.createUser);

api.get('/', tokenNotFoundMiddleware, userController.getUsers);

module.exports = api;
