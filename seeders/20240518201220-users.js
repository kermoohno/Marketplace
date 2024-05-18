'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Users', [{
        name: 'Kermo Ohno',
        password: 'qwerty',
        email: 'kermoohno2@gmail.com',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Users', [{
        name: 'David Gihop',
        password: 'Kass123',
        email: 'DavidGihop@gmail.com',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Users', [{
        name: 'Rober Junior',
        password: 'Koer123',
        email: 'RobertJunior@gmail.com',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
