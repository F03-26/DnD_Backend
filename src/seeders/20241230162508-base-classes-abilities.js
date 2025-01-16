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
   await queryInterface.bulkInsert('ClassesAbilities', [{
    id: 1,
    ability_id: 1,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 2,
    ability_id: 2,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 3,
    ability_id: 6,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 4,
    ability_id: 17,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 5,
    ability_id: 11,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 6,
    ability_id: 12,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 7,
    ability_id: 14,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 8,
    ability_id: 13,
    class_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 9,
    ability_id: 2,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 10,
    ability_id: 1,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 11,
    ability_id: 15,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 12,
    ability_id: 12,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 13,
    ability_id: 17,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 14,
    ability_id: 7,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 15,
    ability_id: 11,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 16,
    ability_id: 18,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 17,
    ability_id: 3,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 18,
    ability_id: 4,
    class_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 19,
    ability_id: 5,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 20,
    ability_id: 6,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 21,
    ability_id: 12,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 22,
    ability_id: 7,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 23,
    ability_id: 10,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 24,
    ability_id: 8,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 25,
    ability_id: 9,
    class_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 26,
    ability_id: 6,
    class_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 27,
    ability_id: 10,
    class_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 28,
    ability_id: 12,
    class_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 29,
    ability_id: 18,
    class_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 30,
    ability_id: 9,
    class_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 31,
    ability_id: 1,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 32,
    ability_id: 17,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 33,
    ability_id: 8,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 34,
    ability_id: 11,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 35,
    ability_id: 14,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 36,
    ability_id: 13,
    class_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 37,
    ability_id: 1,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 38,
    ability_id: 7,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 39,
    ability_id: 8,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 40,
    ability_id: 11,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 41,
    ability_id: 12,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 42,
    ability_id: 4,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 43,
    ability_id: 14,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 44,
    ability_id: 13,
    class_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 45,
    ability_id: 5,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 46,
    ability_id: 15,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 47,
    ability_id: 17,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 48,
    ability_id: 12,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 49,
    ability_id: 18,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 50,
    ability_id: 9,
    class_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 51,
    ability_id: 2,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 52,
    ability_id: 1,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 53,
    ability_id: 6,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 54,
    ability_id: 12,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 55,
    ability_id: 2,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 56,
    ability_id: 4,
    class_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 57,
    ability_id: 1,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 58,
    ability_id: 12,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 59,
    ability_id: 17,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 60,
    ability_id: 10,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 61,
    ability_id: 18,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 62,
    ability_id: 9,
    class_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 63,
    ability_id: 5,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 64,
    ability_id: 10,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 65,
    ability_id: 8,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 66,
    ability_id: 11,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 67,
    ability_id: 12,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 68,
    ability_id: 9,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 69,
    ability_id: 13,
    class_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 70,
    ability_id: 5,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 71,
    ability_id: 15,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 72,
    ability_id: 6,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 73,
    ability_id: 17,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 74,
    ability_id: 7,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 75,
    ability_id: 8,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 76,
    ability_id: 9,
    class_id: 11,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 77,
    ability_id: 1,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 78,
    ability_id: 2,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 79,
    ability_id: 3,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 80,
    ability_id: 4,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 81,
    ability_id: 5,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 82,
    ability_id: 6,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 83,
    ability_id: 7,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 84,
    ability_id: 8,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 85,
    ability_id: 9,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 86,
    ability_id: 10,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 87,
    ability_id: 11,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 88,
    ability_id: 12,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 89,
    ability_id: 13,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 90,
    ability_id: 14,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 91,
    ability_id: 15,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 92,
    ability_id: 16,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 93,
    ability_id: 17,
    class_id: 12,
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    id: 94,
    ability_id: 18,
    class_id: 12,
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
    await queryInterface.bulkDelete('ClassesAbilities', null, {});
  }
};
