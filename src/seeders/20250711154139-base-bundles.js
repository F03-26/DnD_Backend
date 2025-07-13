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
   await queryInterface.bulkInsert('GearBundles', [{
      id: 1,
      bundle_id: 106,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 2,
      bundle_id: 106,
      gear_id: 72,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 3,
      bundle_id: 106,
      gear_id: 85,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 4,
      bundle_id: 106,
      gear_id: 102,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 5,
      bundle_id: 106,
      gear_id: 80,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 6,
      bundle_id: 106,
      gear_id: 29,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 7,
      bundle_id: 107,
      gear_id: 34,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 8,
      bundle_id: 107,
      gear_id: 41,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 9,
      bundle_id: 107,
      gear_id: 83,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 10,
      bundle_id: 107,
      gear_id: 94,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 11,
      bundle_id: 107,
      gear_id: 77,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 12,
      bundle_id: 107,
      gear_id: 3,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 13,
      bundle_id: 107,
      gear_id: 69,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 14,
      bundle_id: 107,
      gear_id: 70,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 15,
      bundle_id: 107,
      gear_id: 48,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 16,
      bundle_id: 107,
      gear_id: 46,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 17,
      bundle_id: 108,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 18,
      bundle_id: 108,
      gear_id: 50,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 19,
      bundle_id: 108,
      gear_id: 94,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 20,
      bundle_id: 108,
      gear_id: 77,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 21,
      bundle_id: 108,
      gear_id: 71,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 22,
      bundle_id: 108,
      gear_id: 14,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 23,
      bundle_id: 108,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 24,
      bundle_id: 109,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 25,
      bundle_id: 109,
      gear_id: 72,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 26,
      bundle_id: 109,
      gear_id: 98,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 27,
      bundle_id: 109,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 28,
      bundle_id: 109,
      gear_id: 9,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 29,
      bundle_id: 109,
      gear_id: 80,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 30,
      bundle_id: 109,
      gear_id: 29,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 31,
      bundle_id: 109,
      gear_id: 35,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 32,
      bundle_id: 110,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 33,
      bundle_id: 110,
      gear_id: 68,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 34,
      bundle_id: 110,
      gear_id: 56,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 35,
      bundle_id: 110,
      gear_id: 76,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 36,
      bundle_id: 110,
      gear_id: 9,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 37,
      bundle_id: 110,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 38,
      bundle_id: 110,
      gear_id: 80,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 39,
      bundle_id: 110,
      gear_id: 29,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 40,
      bundle_id: 110,
      gear_id: 35,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 41,
      bundle_id: 111,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 42,
      bundle_id: 111,
      gear_id: 13,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 43,
      bundle_id: 111,
      gear_id: 17,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 44,
      bundle_id: 111,
      gear_id: 102,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 45,
      bundle_id: 111,
      gear_id: 68,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 46,
      bundle_id: 111,
      gear_id: 56,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 47,
      bundle_id: 111,
      gear_id: 76,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 48,
      bundle_id: 111,
      gear_id: 53,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 49,
      bundle_id: 111,
      gear_id: 3,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 50,
      bundle_id: 111,
      gear_id: 80,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 51,
      bundle_id: 111,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 52,
      bundle_id: 111,
      gear_id: 29,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 53,
      bundle_id: 111,
      gear_id: 35,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 54,
      bundle_id: 112,
      gear_id: 58,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 55,
      bundle_id: 112,
      gear_id: 55,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 56,
      bundle_id: 112,
      gear_id: 102,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 57,
      bundle_id: 112,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 58,
      bundle_id: 112,
      gear_id: 34,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 59,
      bundle_id: 112,
      gear_id: 80,
      amount: 7,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 60,
      bundle_id: 112,
      gear_id: 29,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 61,
      bundle_id: 112,
      gear_id: 5,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 62,
      bundle_id: 112,
      gear_id: 105,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 63,
      bundle_id: 112,
      gear_id: 97,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      id: 64,
      bundle_id: 112,
      gear_id: 49,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('GearBundles', null, {});
  }
};
