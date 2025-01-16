'use strict';

const background = require('../models/background');

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
    await queryInterface.bulkInsert('BackgroundsCoins', [{
      id: 1,
      background_id: 1,
      coin_id: 4,
      amount: 8,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      background_id: 1,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      background_id: 2,
      coin_id: 4,
      amount: 32,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      background_id: 2,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      background_id: 3,
      coin_id: 4,
      amount: 15,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      background_id: 3,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      background_id: 4,
      coin_id: 4,
      amount: 16,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      background_id: 4,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      background_id: 5,
      coin_id: 4,
      amount: 11,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      background_id: 5,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      background_id: 6,
      coin_id: 4,
      amount: 30,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      background_id: 6,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      background_id: 7,
      coin_id: 4,
      amount: 12,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      background_id: 7,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      background_id: 8,
      coin_id: 4,
      amount: 3,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      background_id: 8,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      background_id: 9,
      coin_id: 4,
      amount: 16,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      background_id: 9,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      background_id: 10,
      coin_id: 4,
      amount: 22,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      background_id: 10,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      background_id: 11,
      coin_id: 4,
      amount: 29,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      background_id: 11,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      background_id: 12,
      coin_id: 4,
      amount: 8,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      background_id: 12,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      background_id: 13,
      coin_id: 4,
      amount: 20,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      background_id: 13,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      background_id: 14,
      coin_id: 4,
      amount: 23,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      background_id: 14,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      background_id: 15,
      coin_id: 4,
      amount: 14,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 30,
      background_id: 15,
      coin_id: 4,
      amount: 50,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 31,
      background_id: 16,
      coin_id: 4,
      amount: 16,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 32,
      background_id: 16,
      coin_id: 4,
      amount: 50,
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
    await queryInterface.bulkDelete('BackgroundsCoins', null, {});
  }
};
