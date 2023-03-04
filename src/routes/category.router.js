const express = require('express');
const { categoryController } = require('../controller');
const { tokenMiddleware, nameMiddleware } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenMiddleware, nameMiddleware, categoryController.create);

module.exports = categoryRouter;