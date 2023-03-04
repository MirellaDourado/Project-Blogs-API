const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getById = async (id) => User.findByPk(id, { attributes: { exclude: 'password' } });

const createUser = async (user) => User.create(user);

const remove = (id) => User.destroy({ where: { id } });

module.exports = {
  getByEmail,
  getUsers,
  createUser,
  getById,
  remove,
};