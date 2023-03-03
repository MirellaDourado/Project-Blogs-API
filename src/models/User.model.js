'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  },
  ); 
  User.associate = (models) => {
    User.hasOne(models.Post, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return User;
};