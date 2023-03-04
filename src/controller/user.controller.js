require('dotenv/config');
const { createToken } = require('../helpers/authFuctions');
const { userService } = require('../service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await userService.createUser({ displayName, email, password, image });

  const token = createToken(email);
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};