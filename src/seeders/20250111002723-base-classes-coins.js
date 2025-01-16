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
      await queryInterface.bulkInsert('ClassesCoins', [{
        id: 1,
        class_id: 1,
        coin_id: 4,
        amount: 4,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        class_id: 1,
        coin_id: 4,
        amount: 11,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        class_id: 1,
        coin_id: 4,
        amount: 155,
        option: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        class_id: 2,
        coin_id: 4,
        amount: 8,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 5,
        class_id: 2,
        coin_id: 4,
        amount: 100,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 6,
        class_id: 3,
        coin_id: 4,
        amount: 5,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 7,
        class_id: 3,
        coin_id: 4,
        amount: 55,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 8,
        class_id: 4,
        coin_id: 4,
        amount: 7,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 9,
        class_id: 4,
        coin_id: 4,
        amount: 110,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 10,
        class_id: 5,
        coin_id: 4,
        amount: 15,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 11,
        class_id: 5,
        coin_id: 4,
        amount: 75,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 12,
        class_id: 6,
        coin_id: 4,
        amount: 7,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 13,
        class_id: 6,
        coin_id: 4,
        amount: 150,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 14,
        class_id: 7,
        coin_id: 4,
        amount: 28,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 15,
        class_id: 7,
        coin_id: 4,
        amount: 50,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 16,
        class_id: 8,
        coin_id: 4,
        amount: 11,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 17,
        class_id: 8,
        coin_id: 4,
        amount: 50,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 18,
        class_id: 9,
        coin_id: 4,
        amount: 9,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 19,
        class_id: 9,
        coin_id: 4,
        amount: 150,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 20,
        class_id: 10,
        coin_id: 4,
        amount: 9,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 21,
        class_id: 10,
        coin_id: 4,
        amount: 50,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 22,
        class_id: 11,
        coin_id: 4,
        amount: 15,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 23,
        class_id: 11,
        coin_id: 4,
        amount: 100,
        option: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 24,
        class_id: 12,
        coin_id: 4,
        amount: 19,
        option: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 25,
        class_id: 12,
        coin_id: 4,
        amount: 90,
        option: 2,
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
      await queryInterface.bulkDelete('ClassesCoins', null, {});
  }
};
