const express = require('express');
const { categoryController } = require('../controller');
const { tokenMiddleware, nameMiddleware } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenMiddleware, nameMiddleware, categoryController.create);
categoryRouter.get('/', tokenMiddleware, categoryController.getAll);

module.exports = categoryRouter;