const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async (post) => {
  const { categoryIds } = post;
  const { dataValues } = await BlogPost.create(post);
  await Promise
    .all(categoryIds.map((categoryId) => PostCategory
      .create({ categoryId, postId: dataValues.id })));
};

const findPost = async ({ title, content, userId }) => BlogPost
  .findOne({ where: { title, content, userId } });

const findAll = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

module.exports = {
  create,
  findPost,
  findAll,
};