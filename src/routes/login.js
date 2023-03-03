const express = require('express');
const login = require('../controller/login');

const api = express.Router();

api.post('/', login);

module.exports = api;
