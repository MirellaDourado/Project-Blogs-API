const { Category } = require('../models');

const create = async (category) => Category.create(category);

const findByName = async (name) => Category.findOne({ where: { name } });

const findAll = () => Category.findAll();

module.exports = {
  create,
  findByName,
  findAll,
};