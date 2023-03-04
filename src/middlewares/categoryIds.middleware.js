const { findByAllByID } = require('../service/category.service');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const categories = await findByAllByID(categoryIds);
  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};