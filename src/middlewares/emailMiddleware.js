module.exports = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};