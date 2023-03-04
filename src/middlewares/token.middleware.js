const { verifyToken } = require('../helpers/authFuctions');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
  
    const payload = verifyToken(token);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};