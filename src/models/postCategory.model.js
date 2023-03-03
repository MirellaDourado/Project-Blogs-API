'use strict';

module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('postCategory', {},
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  },
  );
  postCategory.associate = (models) => {
    postCategory.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postCategory,
      as: 'categories'
    });
    postCategory.belongsToMany(models.Post, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: postCategory,
      as: 'posts'
    });
  };
  return postCategory;
};