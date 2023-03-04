const { findById } = require('../service/post.service');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { user } = await findById(id);
  const { dataValues } = req.data;
  if (user.email !== dataValues.email) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  next();
};