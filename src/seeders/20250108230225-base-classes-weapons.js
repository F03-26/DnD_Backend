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
    await queryInterface.bulkInsert('ClassesWeapons', [{
      id: 1,
      class_id: 1,
      weapon_id: 19,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      class_id: 1,
      weapon_id: 21,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      class_id: 1,
      weapon_id: 7,
      amount: 8,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      class_id: 1,
      weapon_id: 16,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      class_id: 1,
      weapon_id: 17,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      class_id: 1,
      weapon_id: 33,
      amount: 1,
      option: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      class_id: 2,
      weapon_id: 2,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      class_id: 2,
      weapon_id: 17,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      class_id: 2,
      weapon_id: 11,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      class_id: 3,
      weapon_id: 2,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      class_id: 4,
      weapon_id: 10,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      class_id: 5,
      weapon_id: 23,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      class_id: 5,
      weapon_id: 5,
      amount: 4,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      class_id: 6,
      weapon_id: 16,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      class_id: 6,
      weapon_id: 17,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      class_id: 6,
      weapon_id: 33,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      class_id: 7,
      weapon_id: 8,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      class_id: 7,
      weapon_id: 2,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      class_id: 8,
      weapon_id: 8,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      class_id: 8,
      weapon_id: 2,
      amount: 5,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      class_id: 9,
      weapon_id: 18,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      class_id: 9,
      weapon_id: 7,
      amount: 6,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      class_id: 10,
      weapon_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      class_id: 11,
      weapon_id: 6,
      amount: 1,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      class_id: 11,
      weapon_id: 2,
      amount: 2,
      option: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      class_id: 12,
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
    await queryInterface.bulkDelete('ClassesWeapons', null, {});
  }
};
