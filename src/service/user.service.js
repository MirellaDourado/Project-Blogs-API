const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const createUser = async (user) => User.create(user);

module.exports = {
  getByEmail,
  getUsers,
  createUser,
};