const { categoryService } = require('../service');
require('dotenv/config');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryService.create({ name });
    const category = await categoryService.findByName(name);
  
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try { 
    const categories = await categoryService.findAll();
    
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
};