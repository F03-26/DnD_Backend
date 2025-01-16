'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Coins', [{
      id: 1,
      name: 'CP',
      value: 0.01,
      value_string: '1/100',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'SP',
      value: 0.1,
      value_string: '1/10',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'EP',
      value: 0.5,
      value_string: '1/2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'GP',
      value: 1,
      value_string: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'PP',
      value: 10,
      value_string: '10',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Coins', null, {});
  }
};
