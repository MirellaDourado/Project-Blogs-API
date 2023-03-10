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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.findById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, title } = req.body;
    await postService.edit({ content, title, id });
    const editedPost = await postService.findById(id);
    return res.status(200).json(editedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await postService.remove(id);
    return res.status(204).json({ message: '' });
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
};

const search = async (req, res) => {
  try {
    const { q = '' } = req.query;
    console.log(q);
    const post = await postService.search(`%${q}%`);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  search,
};