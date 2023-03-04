const { postService } = require('../service');
require('dotenv/config');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { dataValues } = req.data;

    const post = { title, content, categoryIds, userId: dataValues.id };

    await postService.create(post);
    const newPost = await postService.findPost({ title, content, userId: dataValues.id });

    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const posts = await postService.findAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
};