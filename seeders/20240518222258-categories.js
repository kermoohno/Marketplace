'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here to insert initial data into your tables
    // Example:
    await queryInterface.bulkInsert('Categories', [
      { name: 'Swords', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Armor', createdAt: new Date(), updatedAt: new Date() },
      // Add more categories as needed
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed data here
    // Example:
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
