const express = require('express');
const userController = require('../controller/userController');
const {
  alreadyUserMiddleware, displayNameMiddleware,
  emailMiddleware, passwordMiddleware } = require('../middlewares');

const api = express.Router();

api.post('/', displayNameMiddleware, emailMiddleware, passwordMiddleware,
  alreadyUserMiddleware, userController.createUser);

module.exports = api;
