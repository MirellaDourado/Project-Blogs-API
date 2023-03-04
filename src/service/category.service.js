const { Category } = require('../models');

const create = async (category) => Category.create(category);

const findByName = async (name) => Category.findOne({ where: { name } });

module.exports = {
  create,
  findByName,
};