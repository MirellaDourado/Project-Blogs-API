const { Op } = require('sequelize');
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

const findById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const edit = async ({ title, content, id }) => BlogPost
  .update({ title, content }, { where: { id } });

const remove = async (id) => BlogPost.destroy({ where: { id } });

// https://stackoverflow.com/questions/53971268/node-sequelize-find-where-like-wildcard
const search = async (q) => BlogPost.findAll({
  where: {
    [Op.or]:
      [{ title: { [Op.like]: q } }, { content: { [Op.like]: q } }],
    },
  include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
});

module.exports = {
  create,
  findPost,
  findAll,
  findById,
  edit,
  remove,
  search,
};