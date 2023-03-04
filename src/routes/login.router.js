const express = require('express');
const { loginController } = require('../controller');

const api = express.Router();

api.post('/', loginController);

module.exports = api;
