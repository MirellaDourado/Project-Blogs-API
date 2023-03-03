'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  {
    tableName: 'blog_post',
    underscored: true,
    timestamps: false,
  },
  ); 
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User'
    });
    Post.hasMany(models.PostCategory, {
      foreignKey: 'postId',
      as: 'posts'
    });
  };
  return Post;
};