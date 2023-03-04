const { BlogPost, PostCategory } = require('../models');

const create = async (post) => {
  const { categoryIds } = post;
  const { dataValues } = await BlogPost.create(post);
  await Promise
    .all(categoryIds.map((categoryId) => PostCategory
      .create({ categoryId, postId: dataValues.id })));
};

const findPost = ({ title, content, userId }) => BlogPost
  .findOne({ where: { title, content, userId } });

module.exports = {
  create,
  findPost,
};