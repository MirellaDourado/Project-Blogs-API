const { createToken } = require('../helpers/authFuctions');
const { userService } = require('../service');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await userService.getByEmail(email, password);
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    
    const { password_, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).message({ message: error.message });
  }
};