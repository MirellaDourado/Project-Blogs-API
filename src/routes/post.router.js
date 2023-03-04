const express = require('express');
const { tokenMiddleware,
    categoryIdsMiddleware,
    postFieldsMiddleware,
    userVerificationMiddleware,
    postExistenceMiddleware } = require('../middlewares');
const { postController } = require('../controller');

const postRouter = express.Router();

postRouter.post('/',
  tokenMiddleware,
  categoryIdsMiddleware,
  postFieldsMiddleware,
  postController.create);

postRouter.get('/', tokenMiddleware, postController.getAll);

postRouter.get('/:id', tokenMiddleware, postController.getById);

postRouter.put('/:id',
  tokenMiddleware,
  postFieldsMiddleware,
  userVerificationMiddleware,
  postController.update);

postRouter.delete('/:id',
  tokenMiddleware,
  postExistenceMiddleware,
  userVerificationMiddleware,
  postController.remove);

module.exports = postRouter;