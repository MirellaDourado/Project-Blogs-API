const { getByEmail } = require('../service/userService');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await getByEmail(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};