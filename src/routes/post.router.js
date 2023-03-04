const express = require('express');
const { tokenMiddleware, categoryIdsMiddleware, postFieldsMiddleware } = require('../middlewares');
const { postController } = require('../controller');

const postRouter = express.Router();

postRouter.post('/',
  tokenMiddleware,
  categoryIdsMiddleware,
  postFieldsMiddleware,
  postController.create);

module.exports = postRouter;