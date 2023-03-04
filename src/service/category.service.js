const { Category } = require('../models');

const create = async (category) => Category.create(category);

const findByName = async (name) => Category.findOne({ where: { name } });

const findByAllByID = async (id) => Category.findAll({ where: { id } });

module.exports = {
  create,
  findByName,
  findByAllByID,
};