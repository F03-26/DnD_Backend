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
    await queryInterface.bulkInsert('ClassesGears', [{
      id: 1,
      class_id: 1,
      gear_id: 110,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      class_id: 1,
      gear_id: 62,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      class_id: 1,
      gear_id: 6,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      class_id: 1,
      gear_id: 110,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      class_id: 2,
      gear_id: 62,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      class_id: 2,
      gear_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      class_id: 2,
      gear_id: 111,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      class_id: 3,
      gear_id: 20,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      class_id: 3,
      gear_id: 97,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      class_id: 3,
      gear_id: 51,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      class_id: 3,
      gear_id: 108,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      class_id: 4,
      gear_id: 89,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      class_id: 4,
      gear_id: 112,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      class_id: 5,
      gear_id: 109,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      class_id: 6,
      gear_id: 62,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      class_id: 6,
      gear_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      class_id: 6,
      gear_id: 26,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      class_id: 6,
      gear_id: 109,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      class_id: 7,
      gear_id: 19,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      class_id: 7,
      gear_id: 110,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      class_id: 8,
      gear_id: 109,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      class_id: 9,
      gear_id: 89,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      class_id: 9,
      gear_id: 112,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      class_id: 10,
      gear_id: 25,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      class_id: 10,
      gear_id: 109,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      class_id: 11,
      gear_id: 21,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      class_id: 11,
      gear_id: 50,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      class_id: 11,
      gear_id: 108,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      class_id: 12,
      gear_id: 106,
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
      await queryInterface.bulkDelete('ClassesGears', null, {});
  }
};
