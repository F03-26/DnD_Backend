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
    await queryInterface.bulkInsert('BackgroundsGears', [{
      id: 1,
      background_id: 1,
      gear_id: 50,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      background_id: 1,
      gear_id: 89,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      background_id: 1,
      gear_id: 71,
      amount: 10,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      background_id: 1,
      gear_id: 97,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      background_id: 2,
      gear_id: 14,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      background_id: 2,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      background_id: 3,
      gear_id: 85,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      background_id: 3,
      gear_id: 83,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      background_id: 4,
      gear_id: 68,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      background_id: 4,
      gear_id: 14,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      background_id: 4,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      background_id: 5,
      gear_id: 85,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      background_id: 5,
      gear_id: 39,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      background_id: 5,
      gear_id: 70,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      background_id: 5,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      background_id: 6,
      gear_id: 66,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      background_id: 6,
      gear_id: 67,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      background_id: 6,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      background_id: 7,
      gear_id: 63,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      background_id: 7,
      gear_id: 53,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      background_id: 7,
      gear_id: 40,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      background_id: 7,
      gear_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      background_id: 7,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      background_id: 8,
      gear_id: 62,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      background_id: 8,
      gear_id: 72,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      background_id: 8,
      gear_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      background_id: 8,
      gear_id: 93,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      background_id: 8,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      background_id: 9,
      gear_id: 72,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 30,
      background_id: 9,
      gear_id: 50,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 31,
      background_id: 9,
      gear_id: 49,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 32,
      background_id: 9,
      gear_id: 3,
      amount: 3,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 33,
      background_id: 9,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 34,
      background_id: 10,
      gear_id: 14,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 35,
      background_id: 10,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 36,
      background_id: 11,
      gear_id: 83,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 37,
      background_id: 11,
      gear_id: 70,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 38,
      background_id: 12,
      gear_id: 50,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 39,
      background_id: 12,
      gear_id: 71,
      amount: 8,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 40,
      background_id: 12,
      gear_id: 97,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 41,
      background_id: 13,
      gear_id: 35,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 42,
      background_id: 13,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 43,
      background_id: 14,
      gear_id: 83,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 44,
      background_id: 14,
      gear_id: 49,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 45,
      background_id: 14,
      gear_id: 3,
      amount: 3,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 46,
      background_id: 14,
      gear_id: 71,
      amount: 12,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 47,
      background_id: 15,
      gear_id: 62,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 48,
      background_id: 15,
      gear_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 49,
      background_id: 15,
      gear_id: 84,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 50,
      background_id: 16,
      gear_id: 72,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 51,
      background_id: 16,
      gear_id: 14,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 52,
      background_id: 16,
      gear_id: 84,
      amount: 1,
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
    await queryInterface.bulkDelete('BackgroundsGears', null, {});
  }
};
