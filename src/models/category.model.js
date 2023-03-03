'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  },
  );
  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'categoryId',
      as: 'categories'
    });
  };
  return Category;
};