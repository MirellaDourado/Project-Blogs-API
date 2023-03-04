const express = require('express');
const { userController } = require('../controller');
const {
  alreadyUserMiddleware, displayNameMiddleware,
  emailMiddleware, passwordMiddleware, tokenMiddleware } = require('../middlewares');

const api = express.Router();

api.post('/', displayNameMiddleware, emailMiddleware, passwordMiddleware,
  alreadyUserMiddleware, userController.createUser);

api.get('/', tokenMiddleware, userController.getUsers);

api.get('/:id', tokenMiddleware, userController.getUserById);

api.delete('/me', tokenMiddleware, userController.remove);

module.exports = api;
