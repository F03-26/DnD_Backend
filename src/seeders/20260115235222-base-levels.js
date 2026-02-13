'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Levels', [
     { level: 1, xp_start: 0, createdAt: new Date(), updatedAt: new Date() },
     { level: 2, xp_start: 300, createdAt: new Date(), updatedAt: new Date() },
     { level: 3, xp_start: 900, createdAt: new Date(), updatedAt: new Date() },
     { level: 4, xp_start: 2700, createdAt: new Date(), updatedAt: new Date() },
     { level: 5, xp_start: 6500, createdAt: new Date(), updatedAt: new Date() },
     { level: 6, xp_start: 14000, createdAt: new Date(), updatedAt: new Date() },
     { level: 7, xp_start: 23000, createdAt: new Date(), updatedAt: new Date() },
     { level: 8, xp_start: 34000, createdAt: new Date(), updatedAt: new Date() },
     { level: 9, xp_start: 48000, createdAt: new Date(), updatedAt: new Date() },
     { level: 10, xp_start: 64000, createdAt: new Date(), updatedAt: new Date() },
     { level: 11, xp_start: 85000, createdAt: new Date(), updatedAt: new Date() },
     { level: 12, xp_start: 100000, createdAt: new Date(), updatedAt: new Date() },
     { level: 13, xp_start: 120000, createdAt: new Date(), updatedAt: new Date() },
     { level: 14, xp_start: 140000, createdAt: new Date(), updatedAt: new Date() },
     { level: 15, xp_start: 165000, createdAt: new Date(), updatedAt: new Date() },
     { level: 16, xp_start: 195000, createdAt: new Date(), updatedAt: new Date() },
     { level: 17, xp_start: 225000, createdAt: new Date(), updatedAt: new Date() },
     { level: 18, xp_start: 265000, createdAt: new Date(), updatedAt: new Date() },
     { level: 19, xp_start: 305000, createdAt: new Date(), updatedAt: new Date() },
     { level: 20, xp_start: 355000, createdAt: new Date(), updatedAt: new Date() },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
