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
   await queryInterface.bulkInsert('WeaponsProperties', [
    {
      id: 1,
      weapon_id: 1,
      property_id: 10,
      values: '1d8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 2,
      weapon_id: 2,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 3,
      weapon_id: 2,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 4,
      weapon_id: 2,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 5,
      weapon_id: 2,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 6,
      weapon_id: 3,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 7,
      weapon_id: 4,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 8,
      weapon_id: 5,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 9,
      weapon_id: 5,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 10,
      weapon_id: 5,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 11,
      weapon_id: 6,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 12,
      weapon_id: 7,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 13,
      weapon_id: 7,
      property_id: 2,
      values: '9/36',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 14,
      weapon_id: 8,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 15,
      weapon_id: 8,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 16,
      weapon_id: 8,
      property_id: 10,
      values: '1d8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 17,
      weapon_id: 9,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 18,
      weapon_id: 9,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 19,
      weapon_id: 9,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 20,
      weapon_id: 11,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 21,
      weapon_id: 11,
      property_id: 6,
      values: 'Flecha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 22,
      weapon_id: 11,
      property_id: 2,
      values: '24/96',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 23,
      weapon_id: 12,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 24,
      weapon_id: 12,
      property_id: 6,
      values: 'Virote',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 25,
      weapon_id: 12,
      property_id: 2,
      values: '24/96',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 26,
      weapon_id: 12,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 27,
      weapon_id: 13,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 28,
      weapon_id: 13,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 29,
      weapon_id: 13,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 30,
      weapon_id: 14,
      property_id: 6,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 31,
      weapon_id: 14,
      property_id: 2,
      values: '9/36',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 32,
      weapon_id: 15,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 33,
      weapon_id: 15,
      property_id: 4,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 34,
      weapon_id: 15,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 35,
      weapon_id: 16,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 36,
      weapon_id: 16,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 37,
      weapon_id: 17,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 38,
      weapon_id: 17,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 39,
      weapon_id: 18,
      property_id: 10,
      values: '1d10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 40,
      weapon_id: 19,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 41,
      weapon_id: 19,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 42,
      weapon_id: 20,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 43,
      weapon_id: 22,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 44,
      weapon_id: 22,
      property_id: 4,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 45,
      weapon_id: 22,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 46,
      weapon_id: 23,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 47,
      weapon_id: 23,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 48,
      weapon_id: 24,
      property_id: 10,
      values: '1d10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 49,
      weapon_id: 25,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 50,
      weapon_id: 25,
      property_id: 4,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 51,
      weapon_id: 25,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 52,
      weapon_id: 26,
      property_id: 4,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 53,
      weapon_id: 26,
      property_id: 9,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 54,
      weapon_id: 28,
      property_id: 10,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 55,
      weapon_id: 29,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 56,
      weapon_id: 29,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 57,
      weapon_id: 30,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 58,
      weapon_id: 30,
      property_id: 4,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 59,
      weapon_id: 30,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 60,
      weapon_id: 31,
      property_id: 10,
      values: '1d10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 61,
      weapon_id: 32,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 62,
      weapon_id: 32,
      property_id: 2,
      values: '6/18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 63,
      weapon_id: 32,
      property_id: 10,
      values: '1d10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 64,
      weapon_id: 33,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 65,
      weapon_id: 33,
      property_id: 6,
      values: 'Flecha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 66,
      weapon_id: 33,
      property_id: 2,
      values: '45/180',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 67,
      weapon_id: 33,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 68,
      weapon_id: 34,
      property_id: 5,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 69,
      weapon_id: 34,
      property_id: 6,
      values: 'Virote',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 70,
      weapon_id: 34,
      property_id: 2,
      values: '9/36',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 71,
      weapon_id: 34,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 72,
      weapon_id: 35,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 73,
      weapon_id: 35,
      property_id: 6,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 74,
      weapon_id: 35,
      property_id: 2,
      values: "45/180",
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 75,
      weapon_id: 35,
      property_id: 7,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 76,
      weapon_id: 35,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 77,
      weapon_id: 36,
      property_id: 6,
      values: 'Dardo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 78,
      weapon_id: 36,
      property_id: 2,
      values: '7,5/30',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 79,
      weapon_id: 36,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 80,
      weapon_id: 37,
      property_id: 3,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 81,
      weapon_id: 37,
      property_id: 2,
      values: "5/15",
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 82,
      weapon_id: 38,
      property_id: 1,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 83,
      weapon_id: 38,
      property_id: 6,
      values: 'Bala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 84,
      weapon_id: 38,
      property_id: 2,
      values: '12/36',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 85,
      weapon_id: 38,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 86,
      weapon_id: 39,
      property_id: 6,
      values: 'Bala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 87,
      weapon_id: 39,
      property_id: 2,
      values: '9/27',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 88,
      weapon_id: 39,
      property_id: 8,
      values: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WeaponsProperties', null, {});
  }
};
