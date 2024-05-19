'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Items', 'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'price', {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'tier', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'quality', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'quantity', {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'enchantment', {
        type: Sequelize.DECIMAL(10, 0),
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'image', {
        type: Sequelize.STRING,
        allowNull: false
      }),
      queryInterface.changeColumn('Items', 'category_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      }),
      queryInterface.changeColumn('Items', 'user_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.dropTable('Items')
    ]);
  }
};
