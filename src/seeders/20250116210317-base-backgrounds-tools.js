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
    await queryInterface.bulkInsert('BackgroundsTools', [{
      id: 1,
      background_id: 1,
      tool_id: 24,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      background_id: 2,
      tool_id: 30,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      background_id: 3,
      tool_id: 32,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      background_id: 4,
      tool_id: 28,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      background_id: 5,
      tool_id: 31,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      background_id: 6,
      tool_id: 13,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      background_id: 7,
      tool_id: 33,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      background_id: 8,
      tool_id: 14,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      background_id: 9,
      tool_id: 29,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      background_id: 10,
      tool_id: 34,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      background_id: 11,
      tool_id: 33,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      background_id: 12,
      tool_id: 24,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      background_id: 13,
      tool_id: 34,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      background_id: 14,
      tool_id: 24,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      background_id: 15,
      tool_id: 33,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      background_id: 16,
      tool_id: 28,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      background_id: 16,
      tool_id: 33,
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
    await queryInterface.bulkDelete('BackgroundsTools', null, {});
  }
};
