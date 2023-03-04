require('dotenv/config');
const { createToken, verifyToken } = require('../helpers/authFuctions');
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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
      const user = await userService.getById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = (req, res) => {
  try {
    const token = req.header('Authorization');
    const { data } = verifyToken(token);
    const { dataValues } = data;
    const { id } = dataValues;
    userService.remove(id);

    return res.status(204).json({ message: '' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  remove,
};