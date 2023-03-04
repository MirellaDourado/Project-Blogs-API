const { Category } = require('../models');

const create = async (category) => Category.create(category);

const findByName = async (name) => Category.findOne({ where: { name } });

const findAllByID = async (id) => Category.findAll({ where: { id } });

const findAll = async () => Category.findAll();

module.exports = {
  create,
  findByName,
  findAllByID,
  findAll,
};