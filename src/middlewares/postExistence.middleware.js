const { findById } = require('../service/post.service');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const postExists = await findById(id);
  
  if (!postExists) return res.status(404).json({ message: 'Post does not exist' });

  next();
};