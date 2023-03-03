const { User } = require('../models');

const getByEmail = async (email, password) => User.findOne({ where: { email, password } });

const getUsers = () => User.findAll();

module.exports = {
  getByEmail,
  getUsers,
};