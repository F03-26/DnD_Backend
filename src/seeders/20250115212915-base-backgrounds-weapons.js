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
    await queryInterface.bulkInsert('BackgroundsWeapons', [{
      id: 1,
      background_id: 4,
      weapon_id: 2,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      background_id: 6,
      weapon_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      background_id: 7,
      weapon_id: 8,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      background_id: 7,
      weapon_id: 12,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      background_id: 8,
      weapon_id: 11,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      background_id: 13,
      weapon_id: 2,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      background_id: 15,
      weapon_id: 8,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      background_id: 15,
      weapon_id: 11,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      background_id: 16,
      weapon_id: 2,
      amount: 2,
      option: 1,
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
    await queryInterface.bulkDelete('BackgroundsWeapons', null, {});
  }
};
