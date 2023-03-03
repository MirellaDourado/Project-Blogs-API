const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seecret';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '10min',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };