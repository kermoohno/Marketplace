'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Category.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: true, // By default, timestamps (createdAt and updatedAt) are enabled
    createdAt: 'createdAt', // Customize the createdAt field name if needed
    updatedAt: 'updatedAt' // Customize the updatedAt field name if needed
  });

  return Category;
};
