require('dotenv/config');
const { createToken } = require('../helpers/authFuctions');
const { userService } = require('../service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await userService.createUser({ displayName, email, password, image });

  const token = createToken(email);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};