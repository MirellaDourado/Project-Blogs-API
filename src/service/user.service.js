const { User } = require('../models');

const getByEmail = async (email) => User.findOne({ where: { email } });

// const getLogin = async ({ email, password }) => User.findOne({ where: { email, password } });

const getUsers = async () => User.findAll();

const createUser = async (user) => User.create(user);

module.exports = {
  getByEmail,
  getUsers,
  createUser,
};