const { User } = require('../models');

module.exports = async ({ email, password }) => User.findOne({ where: { email, password } });