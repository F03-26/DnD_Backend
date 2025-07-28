'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClassesSpells', [
      {
        id: 1,
        spell_id: 1,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        spell_id: 1,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        spell_id: 2,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        spell_id: 2,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        spell_id: 2,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        spell_id: 2,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        spell_id: 3,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        spell_id: 3,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        spell_id: 3,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        spell_id: 4,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        spell_id: 4,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        spell_id: 4,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        spell_id: 5,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        spell_id: 5,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        spell_id: 5,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        spell_id: 6,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        spell_id: 6,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        spell_id: 6,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        spell_id: 6,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        spell_id: 7,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        spell_id: 7,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        spell_id: 7,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        spell_id: 8,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        spell_id: 9,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        spell_id: 10,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        spell_id: 11,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        spell_id: 12,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        spell_id: 12,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        spell_id: 13,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        spell_id: 13,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        spell_id: 13,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        spell_id: 13,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        spell_id: 14,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        spell_id: 14,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        spell_id: 14,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        spell_id: 14,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        spell_id: 15,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        spell_id: 15,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        spell_id: 15,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        spell_id: 16,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        spell_id: 16,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        spell_id: 17,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        spell_id: 17,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        spell_id: 17,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        spell_id: 18,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        spell_id: 19,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        spell_id: 19,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 48,
        spell_id: 19,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        spell_id: 19,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 50,
        spell_id: 20,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 51,
        spell_id: 20,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 52,
        spell_id: 20,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 53,
        spell_id: 20,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 54,
        spell_id: 21,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 55,
        spell_id: 21,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 56,
        spell_id: 21,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 57,
        spell_id: 22,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 58,
        spell_id: 22,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 59,
        spell_id: 22,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 60,
        spell_id: 22,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 61,
        spell_id: 23,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 62,
        spell_id: 23,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 63,
        spell_id: 24,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 64,
        spell_id: 24,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 65,
        spell_id: 24,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 66,
        spell_id: 24,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 67,
        spell_id: 24,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 68,
        spell_id: 25,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 69,
        spell_id: 25,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 70,
        spell_id: 25,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 71,
        spell_id: 26,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 72,
        spell_id: 26,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 73,
        spell_id: 26,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 74,
        spell_id: 27,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 75,
        spell_id: 27,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 76,
        spell_id: 27,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 77,
        spell_id: 27,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 78,
        spell_id: 28,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 79,
        spell_id: 28,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 80,
        spell_id: 28,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 81,
        spell_id: 29,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 82,
        spell_id: 29,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 83,
        spell_id: 29,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 84,
        spell_id: 30,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 85,
        spell_id: 30,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 86,
        spell_id: 30,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 87,
        spell_id: 30,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 88,
        spell_id: 31,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 89,
        spell_id: 31,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 90,
        spell_id: 31,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 91,
        spell_id: 31,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 92,
        spell_id: 32,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 93,
        spell_id: 33,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 94,
        spell_id: 34,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 95,
        spell_id: 34,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 96,
        spell_id: 35,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 97,
        spell_id: 35,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 98,
        spell_id: 36,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 99,
        spell_id: 37,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 100,
        spell_id: 38,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 101,
        spell_id: 38,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 102,
        spell_id: 38,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 103,
        spell_id: 39,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 104,
        spell_id: 40,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 105,
        spell_id: 40,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 106,
        spell_id: 41,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 107,
        spell_id: 42,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 108,
        spell_id: 42,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 109,
        spell_id: 42,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 110,
        spell_id: 43,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 111,
        spell_id: 44,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 112,
        spell_id: 45,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 113,
        spell_id: 45,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 114,
        spell_id: 45,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 115,
        spell_id: 45,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 116,
        spell_id: 45,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 117,
        spell_id: 46,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 118,
        spell_id: 46,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 119,
        spell_id: 46,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 120,
        spell_id: 47,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 121,
        spell_id: 47,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 122,
        spell_id: 47,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 123,
        spell_id: 47,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 124,
        spell_id: 48,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 125,
        spell_id: 49,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 126,
        spell_id: 50,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 127,
        spell_id: 51,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 128,
        spell_id: 51,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 129,
        spell_id: 51,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 130,
        spell_id: 51,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 131,
        spell_id: 52,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 132,
        spell_id: 52,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 133,
        spell_id: 53,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 134,
        spell_id: 53,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 135,
        spell_id: 54,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 136,
        spell_id: 54,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 137,
        spell_id: 54,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 138,
        spell_id: 56,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 139,
        spell_id: 57,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 140,
        spell_id: 58,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 141,
        spell_id: 58,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 142,
        spell_id: 59,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 143,
        spell_id: 59,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 144,
        spell_id: 60,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 145,
        spell_id: 60,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 146,
        spell_id: 61,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 147,
        spell_id: 61,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 148,
        spell_id: 62,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 149,
        spell_id: 62,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 150,
        spell_id: 63,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 151,
        spell_id: 63,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 152,
        spell_id: 64,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 153,
        spell_id: 64,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 154,
        spell_id: 65,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 155,
        spell_id: 66,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 156,
        spell_id: 66,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 157,
        spell_id: 66,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 158,
        spell_id: 66,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 159,
        spell_id: 66,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 160,
        spell_id: 67,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 161,
        spell_id: 67,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 162,
        spell_id: 68,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 163,
        spell_id: 68,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 164,
        spell_id: 68,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 165,
        spell_id: 69,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 166,
        spell_id: 69,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 167,
        spell_id: 69,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 168,
        spell_id: 70,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 169,
        spell_id: 71,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 170,
        spell_id: 71,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 171,
        spell_id: 71,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 172,
        spell_id: 71,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 173,
        spell_id: 72,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 174,
        spell_id: 72,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 175,
        spell_id: 73,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 176,
        spell_id: 73,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 177,
        spell_id: 73,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 178,
        spell_id: 73,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 179,
        spell_id: 73,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 180,
        spell_id: 74,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 181,
        spell_id: 74,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 182,
        spell_id: 75,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 183,
        spell_id: 75,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 184,
        spell_id: 75,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 185,
        spell_id: 75,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 186,
        spell_id: 75,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 187,
        spell_id: 75,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 188,
        spell_id: 75,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 189,
        spell_id: 76,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 190,
        spell_id: 76,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 191,
        spell_id: 76,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 192,
        spell_id: 76,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 193,
        spell_id: 77,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 194,
        spell_id: 77,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 195,
        spell_id: 77,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 196,
        spell_id: 78,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 197,
        spell_id: 79,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 198,
        spell_id: 79,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 199,
        spell_id: 79,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 200,
        spell_id: 79,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 201,
        spell_id: 80,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 202,
        spell_id: 81,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 203,
        spell_id: 81,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 204,
        spell_id: 81,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 205,
        spell_id: 81,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 206,
        spell_id: 82,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 207,
        spell_id: 83,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 208,
        spell_id: 83,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 209,
        spell_id: 84,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 210,
        spell_id: 84,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 211,
        spell_id: 84,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 212,
        spell_id: 85,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 213,
        spell_id: 85,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 214,
        spell_id: 86,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 215,
        spell_id: 86,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 216,
        spell_id: 87,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 217,
        spell_id: 87,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 218,
        spell_id: 87,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 219,
        spell_id: 88,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 220,
        spell_id: 89,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 221,
        spell_id: 89,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 222,
        spell_id: 89,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 223,
        spell_id: 89,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 224,
        spell_id: 90,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 225,
        spell_id: 91,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 226,
        spell_id: 92,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 227,
        spell_id: 92,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 228,
        spell_id: 93,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 229,
        spell_id: 93,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 230,
        spell_id: 94,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 231,
        spell_id: 95,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 232,
        spell_id: 95,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 233,
        spell_id: 95,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 234,
        spell_id: 95,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 235,
        spell_id: 96,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 236,
        spell_id: 97,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 237,
        spell_id: 97,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 238,
        spell_id: 98,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 239,
        spell_id: 98,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 240,
        spell_id: 98,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 241,
        spell_id: 99,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 242,
        spell_id: 100,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 243,
        spell_id: 100,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 244,
        spell_id: 101,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 245,
        spell_id: 102,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 246,
        spell_id: 103,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 247,
        spell_id: 103,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 248,
        spell_id: 103,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 249,
        spell_id: 104,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 250,
        spell_id: 104,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 251,
        spell_id: 104,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 252,
        spell_id: 105,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 253,
        spell_id: 105,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 254,
        spell_id: 106,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 255,
        spell_id: 106,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 256,
        spell_id: 106,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 257,
        spell_id: 107,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 258,
        spell_id: 107,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 259,
        spell_id: 107,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 260,
        spell_id: 108,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 261,
        spell_id: 109,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 262,
        spell_id: 110,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 263,
        spell_id: 110,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 264,
        spell_id: 110,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 265,
        spell_id: 110,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 266,
        spell_id: 111,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 267,
        spell_id: 111,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 268,
        spell_id: 111,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 269,
        spell_id: 111,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 270,
        spell_id: 112,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 271,
        spell_id: 112,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 272,
        spell_id: 113,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 273,
        spell_id: 113,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 274,
        spell_id: 114,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 275,
        spell_id: 115,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 276,
        spell_id: 115,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 277,
        spell_id: 115,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 278,
        spell_id: 115,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 279,
        spell_id: 115,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 280,
        spell_id: 116,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 281,
        spell_id: 116,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 282,
        spell_id: 116,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 283,
        spell_id: 117,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 284,
        spell_id: 117,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 285,
        spell_id: 117,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 286,
        spell_id: 118,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 287,
        spell_id: 118,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 288,
        spell_id: 119,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 289,
        spell_id: 119,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 290,
        spell_id: 119,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 291,
        spell_id: 120,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 292,
        spell_id: 121,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 293,
        spell_id: 121,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 294,
        spell_id: 122,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 295,
        spell_id: 122,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 296,
        spell_id: 122,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 297,
        spell_id: 123,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 298,
        spell_id: 123,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 299,
        spell_id: 124,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 300,
        spell_id: 124,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 301,
        spell_id: 125,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 302,
        spell_id: 125,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 303,
        spell_id: 125,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 304,
        spell_id: 126,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 305,
        spell_id: 126,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 306,
        spell_id: 126,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 307,
        spell_id: 127,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 308,
        spell_id: 127,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 309,
        spell_id: 127,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 310,
        spell_id: 128,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 311,
        spell_id: 128,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 312,
        spell_id: 128,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 313,
        spell_id: 129,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 314,
        spell_id: 129,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 315,
        spell_id: 129,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 316,
        spell_id: 129,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 317,
        spell_id: 130,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 318,
        spell_id: 130,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 319,
        spell_id: 131,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 320,
        spell_id: 131,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 321,
        spell_id: 132,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 322,
        spell_id: 133,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 323,
        spell_id: 134,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 324,
        spell_id: 134,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 325,
        spell_id: 134,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 326,
        spell_id: 134,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 327,
        spell_id: 135,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 328,
        spell_id: 136,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 329,
        spell_id: 136,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 330,
        spell_id: 136,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 331,
        spell_id: 137,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 332,
        spell_id: 137,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 333,
        spell_id: 138,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 334,
        spell_id: 138,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 335,
        spell_id: 138,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 336,
        spell_id: 139,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 337,
        spell_id: 140,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 338,
        spell_id: 141,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 339,
        spell_id: 141,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 340,
        spell_id: 142,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 341,
        spell_id: 142,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 342,
        spell_id: 142,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 343,
        spell_id: 142,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 344,
        spell_id: 143,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 345,
        spell_id: 143,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 346,
        spell_id: 144,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 347,
        spell_id: 144,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 348,
        spell_id: 144,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 349,
        spell_id: 145,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 350,
        spell_id: 145,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 351,
        spell_id: 145,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 352,
        spell_id: 146,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 353,
        spell_id: 147,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 354,
        spell_id: 147,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 355,
        spell_id: 147,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 356,
        spell_id: 148,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 357,
        spell_id: 148,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 358,
        spell_id: 149,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 359,
        spell_id: 149,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 360,
        spell_id: 150,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 361,
        spell_id: 150,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 362,
        spell_id: 150,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 363,
        spell_id: 150,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 364,
        spell_id: 151,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 365,
        spell_id: 151,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 366,
        spell_id: 152,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 367,
        spell_id: 153,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 368,
        spell_id: 153,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 369,
        spell_id: 154,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 370,
        spell_id: 154,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 371,
        spell_id: 154,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 372,
        spell_id: 154,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 373,
        spell_id: 155,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 374,
        spell_id: 155,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 375,
        spell_id: 155,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 376,
        spell_id: 156,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 377,
        spell_id: 157,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 378,
        spell_id: 157,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 379,
        spell_id: 157,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 380,
        spell_id: 157,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 381,
        spell_id: 158,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 382,
        spell_id: 158,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 383,
        spell_id: 158,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 384,
        spell_id: 159,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 385,
        spell_id: 159,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 386,
        spell_id: 159,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 387,
        spell_id: 159,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 388,
        spell_id: 160,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 389,
        spell_id: 160,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 390,
        spell_id: 160,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 391,
        spell_id: 161,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 392,
        spell_id: 161,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 393,
        spell_id: 161,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 394,
        spell_id: 162,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 395,
        spell_id: 162,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 396,
        spell_id: 163,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 397,
        spell_id: 163,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 398,
        spell_id: 163,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 399,
        spell_id: 164,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 400,
        spell_id: 164,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 401,
        spell_id: 164,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 402,
        spell_id: 164,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 403,
        spell_id: 165,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 404,
        spell_id: 165,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 405,
        spell_id: 165,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 406,
        spell_id: 165,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 407,
        spell_id: 165,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 408,
        spell_id: 165,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 409,
        spell_id: 166,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 410,
        spell_id: 166,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 411,
        spell_id: 166,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 412,
        spell_id: 166,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 413,
        spell_id: 167,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 414,
        spell_id: 167,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 415,
        spell_id: 168,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 416,
        spell_id: 169,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 417,
        spell_id: 169,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 418,
        spell_id: 169,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 419,
        spell_id: 170,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 420,
        spell_id: 170,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 421,
        spell_id: 170,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 422,
        spell_id: 170,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 423,
        spell_id: 171,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 424,
        spell_id: 171,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 425,
        spell_id: 172,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 426,
        spell_id: 172,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 427,
        spell_id: 172,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 428,
        spell_id: 173,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 429,
        spell_id: 173,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 430,
        spell_id: 174,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 431,
        spell_id: 175,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 432,
        spell_id: 175,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 433,
        spell_id: 175,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 434,
        spell_id: 176,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 435,
        spell_id: 176,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 436,
        spell_id: 177,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 437,
        spell_id: 177,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 438,
        spell_id: 177,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 439,
        spell_id: 177,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 440,
        spell_id: 178,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 441,
        spell_id: 178,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 442,
        spell_id: 179,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 443,
        spell_id: 179,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 444,
        spell_id: 180,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 445,
        spell_id: 180,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 446,
        spell_id: 180,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 447,
        spell_id: 180,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 448,
        spell_id: 180,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 449,
        spell_id: 180,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 450,
        spell_id: 181,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 451,
        spell_id: 181,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 452,
        spell_id: 182,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 453,
        spell_id: 183,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 454,
        spell_id: 183,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 455,
        spell_id: 183,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 456,
        spell_id: 183,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 457,
        spell_id: 184,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 458,
        spell_id: 185,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 459,
        spell_id: 185,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 460,
        spell_id: 185,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 461,
        spell_id: 186,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 462,
        spell_id: 186,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 463,
        spell_id: 186,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 464,
        spell_id: 186,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 465,
        spell_id: 186,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 466,
        spell_id: 187,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 467,
        spell_id: 187,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 468,
        spell_id: 188,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 469,
        spell_id: 188,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 470,
        spell_id: 188,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 471,
        spell_id: 189,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 472,
        spell_id: 189,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 473,
        spell_id: 189,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 474,
        spell_id: 189,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 475,
        spell_id: 189,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 476,
        spell_id: 189,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 477,
        spell_id: 190,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 478,
        spell_id: 190,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 479,
        spell_id: 191,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 480,
        spell_id: 191,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 481,
        spell_id: 191,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 482,
        spell_id: 191,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 483,
        spell_id: 192,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 484,
        spell_id: 192,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 485,
        spell_id: 193,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 486,
        spell_id: 194,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 487,
        spell_id: 194,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 488,
        spell_id: 194,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 489,
        spell_id: 195,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 490,
        spell_id: 195,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 491,
        spell_id: 195,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 492,
        spell_id: 196,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 493,
        spell_id: 196,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 494,
        spell_id: 196,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 495,
        spell_id: 197,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 496,
        spell_id: 197,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 497,
        spell_id: 197,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 498,
        spell_id: 197,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 499,
        spell_id: 198,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 500,
        spell_id: 198,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 501,
        spell_id: 198,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 502,
        spell_id: 199,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 503,
        spell_id: 200,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 504,
        spell_id: 200,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 505,
        spell_id: 200,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 506,
        spell_id: 201,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 507,
        spell_id: 202,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 508,
        spell_id: 202,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 509,
        spell_id: 203,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 510,
        spell_id: 203,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 511,
        spell_id: 203,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 512,
        spell_id: 204,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 513,
        spell_id: 204,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 514,
        spell_id: 205,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 515,
        spell_id: 205,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 516,
        spell_id: 205,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 517,
        spell_id: 205,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 518,
        spell_id: 206,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 519,
        spell_id: 206,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 520,
        spell_id: 206,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 521,
        spell_id: 207,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 522,
        spell_id: 207,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 523,
        spell_id: 208,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 524,
        spell_id: 209,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 525,
        spell_id: 209,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 526,
        spell_id: 210,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 527,
        spell_id: 210,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 528,
        spell_id: 210,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 529,
        spell_id: 211,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 530,
        spell_id: 211,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 531,
        spell_id: 211,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 532,
        spell_id: 212,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 533,
        spell_id: 212,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 534,
        spell_id: 212,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 535,
        spell_id: 212,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 536,
        spell_id: 213,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 537,
        spell_id: 213,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 538,
        spell_id: 213,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 539,
        spell_id: 214,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 540,
        spell_id: 214,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 541,
        spell_id: 214,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 542,
        spell_id: 215,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 543,
        spell_id: 215,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 544,
        spell_id: 216,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 545,
        spell_id: 216,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 546,
        spell_id: 216,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 547,
        spell_id: 217,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 548,
        spell_id: 217,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 549,
        spell_id: 218,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 550,
        spell_id: 219,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 551,
        spell_id: 219,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 552,
        spell_id: 219,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 553,
        spell_id: 219,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 554,
        spell_id: 220,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 555,
        spell_id: 220,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 556,
        spell_id: 221,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 557,
        spell_id: 221,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 558,
        spell_id: 222,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 559,
        spell_id: 222,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 560,
        spell_id: 222,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 561,
        spell_id: 223,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 562,
        spell_id: 223,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 563,
        spell_id: 224,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 564,
        spell_id: 224,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 565,
        spell_id: 224,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 566,
        spell_id: 224,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 567,
        spell_id: 225,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 568,
        spell_id: 225,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 569,
        spell_id: 226,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 570,
        spell_id: 227,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 571,
        spell_id: 227,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 572,
        spell_id: 227,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 573,
        spell_id: 228,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 574,
        spell_id: 228,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 575,
        spell_id: 229,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 576,
        spell_id: 229,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 577,
        spell_id: 229,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 578,
        spell_id: 230,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 579,
        spell_id: 231,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 580,
        spell_id: 231,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 581,
        spell_id: 231,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 582,
        spell_id: 232,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 583,
        spell_id: 233,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 584,
        spell_id: 233,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 585,
        spell_id: 234,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 586,
        spell_id: 235,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 587,
        spell_id: 235,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 588,
        spell_id: 235,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 589,
        spell_id: 236,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 590,
        spell_id: 236,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 591,
        spell_id: 236,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 592,
        spell_id: 236,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 593,
        spell_id: 237,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 594,
        spell_id: 237,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 595,
        spell_id: 238,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 596,
        spell_id: 239,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 597,
        spell_id: 239,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 598,
        spell_id: 240,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 599,
        spell_id: 240,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 600,
        spell_id: 240,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 601,
        spell_id: 241,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 602,
        spell_id: 241,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 603,
        spell_id: 242,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 604,
        spell_id: 243,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 605,
        spell_id: 243,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 606,
        spell_id: 243,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 607,
        spell_id: 243,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 608,
        spell_id: 243,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 609,
        spell_id: 244,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 610,
        spell_id: 244,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 611,
        spell_id: 244,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 612,
        spell_id: 244,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 613,
        spell_id: 244,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 614,
        spell_id: 244,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 615,
        spell_id: 244,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 616,
        spell_id: 245,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 617,
        spell_id: 245,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 618,
        spell_id: 245,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 619,
        spell_id: 246,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 620,
        spell_id: 246,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 621,
        spell_id: 246,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 622,
        spell_id: 246,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 623,
        spell_id: 247,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 624,
        spell_id: 247,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 625,
        spell_id: 247,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 626,
        spell_id: 248,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 627,
        spell_id: 248,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 628,
        spell_id: 248,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 629,
        spell_id: 249,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 630,
        spell_id: 249,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 631,
        spell_id: 249,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 632,
        spell_id: 249,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 633,
        spell_id: 250,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 634,
        spell_id: 250,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 635,
        spell_id: 250,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 636,
        spell_id: 250,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 637,
        spell_id: 251,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 638,
        spell_id: 251,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 639,
        spell_id: 252,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 640,
        spell_id: 252,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 641,
        spell_id: 252,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 642,
        spell_id: 252,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 643,
        spell_id: 253,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 644,
        spell_id: 253,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 645,
        spell_id: 253,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 646,
        spell_id: 254,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 647,
        spell_id: 254,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 648,
        spell_id: 254,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 649,
        spell_id: 255,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 650,
        spell_id: 256,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 651,
        spell_id: 256,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 652,
        spell_id: 256,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 653,
        spell_id: 257,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 654,
        spell_id: 257,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 655,
        spell_id: 257,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 656,
        spell_id: 258,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 657,
        spell_id: 258,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 658,
        spell_id: 259,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 659,
        spell_id: 259,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 660,
        spell_id: 259,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 661,
        spell_id: 260,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 662,
        spell_id: 261,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 663,
        spell_id: 261,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 664,
        spell_id: 261,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 665,
        spell_id: 261,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 666,
        spell_id: 262,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 667,
        spell_id: 262,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 668,
        spell_id: 262,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 669,
        spell_id: 262,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 670,
        spell_id: 263,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 671,
        spell_id: 263,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 672,
        spell_id: 263,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 673,
        spell_id: 263,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 674,
        spell_id: 264,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 675,
        spell_id: 264,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 676,
        spell_id: 264,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 677,
        spell_id: 265,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 678,
        spell_id: 265,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 679,
        spell_id: 266,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 680,
        spell_id: 266,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 681,
        spell_id: 267,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 682,
        spell_id: 268,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 683,
        spell_id: 268,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 684,
        spell_id: 269,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 685,
        spell_id: 269,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 686,
        spell_id: 269,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 687,
        spell_id: 269,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 688,
        spell_id: 270,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 689,
        spell_id: 270,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 690,
        spell_id: 270,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 691,
        spell_id: 270,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 692,
        spell_id: 271,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 693,
        spell_id: 271,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 694,
        spell_id: 272,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 695,
        spell_id: 272,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 696,
        spell_id: 272,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 697,
        spell_id: 273,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 698,
        spell_id: 273,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 699,
        spell_id: 274,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 700,
        spell_id: 274,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 701,
        spell_id: 275,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 702,
        spell_id: 275,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 703,
        spell_id: 275,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 704,
        spell_id: 276,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 705,
        spell_id: 277,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 706,
        spell_id: 277,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 707,
        spell_id: 277,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 708,
        spell_id: 278,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 709,
        spell_id: 278,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 710,
        spell_id: 278,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 711,
        spell_id: 279,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 712,
        spell_id: 279,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 713,
        spell_id: 279,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 714,
        spell_id: 279,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 715,
        spell_id: 279,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 716,
        spell_id: 280,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 717,
        spell_id: 280,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 718,
        spell_id: 280,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 719,
        spell_id: 281,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 720,
        spell_id: 282,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 721,
        spell_id: 282,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 722,
        spell_id: 282,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 723,
        spell_id: 282,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 724,
        spell_id: 283,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 725,
        spell_id: 283,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 726,
        spell_id: 283,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 727,
        spell_id: 283,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 728,
        spell_id: 284,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 729,
        spell_id: 284,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 730,
        spell_id: 284,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 731,
        spell_id: 285,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 732,
        spell_id: 285,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 733,
        spell_id: 285,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 734,
        spell_id: 286,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 735,
        spell_id: 286,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 736,
        spell_id: 286,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 737,
        spell_id: 287,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 738,
        spell_id: 287,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 739,
        spell_id: 287,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 740,
        spell_id: 288,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 741,
        spell_id: 288,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 742,
        spell_id: 288,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 743,
        spell_id: 289,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 744,
        spell_id: 290,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 745,
        spell_id: 290,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 746,
        spell_id: 290,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 747,
        spell_id: 290,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 748,
        spell_id: 291,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 749,
        spell_id: 291,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 750,
        spell_id: 291,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 751,
        spell_id: 292,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 752,
        spell_id: 292,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 753,
        spell_id: 292,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 754,
        spell_id: 292,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 755,
        spell_id: 293,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 756,
        spell_id: 293,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 757,
        spell_id: 294,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 758,
        spell_id: 294,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 759,
        spell_id: 295,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 760,
        spell_id: 295,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 761,
        spell_id: 296,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 762,
        spell_id: 296,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 763,
        spell_id: 296,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 764,
        spell_id: 297,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 765,
        spell_id: 297,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 766,
        spell_id: 298,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 767,
        spell_id: 299,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 768,
        spell_id: 299,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 769,
        spell_id: 299,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 770,
        spell_id: 299,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 771,
        spell_id: 299,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 772,
        spell_id: 300,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 773,
        spell_id: 300,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 774,
        spell_id: 300,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 775,
        spell_id: 301,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 776,
        spell_id: 302,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 777,
        spell_id: 302,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 778,
        spell_id: 302,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 779,
        spell_id: 303,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 780,
        spell_id: 303,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 781,
        spell_id: 303,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 782,
        spell_id: 303,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 783,
        spell_id: 304,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 784,
        spell_id: 304,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 785,
        spell_id: 304,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 786,
        spell_id: 304,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 787,
        spell_id: 305,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 788,
        spell_id: 305,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 789,
        spell_id: 306,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 790,
        spell_id: 307,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 791,
        spell_id: 307,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 792,
        spell_id: 308,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 793,
        spell_id: 308,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 794,
        spell_id: 309,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 795,
        spell_id: 309,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 796,
        spell_id: 309,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 797,
        spell_id: 309,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 798,
        spell_id: 309,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 799,
        spell_id: 310,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 800,
        spell_id: 310,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 801,
        spell_id: 310,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 802,
        spell_id: 310,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 803,
        spell_id: 311,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 804,
        spell_id: 311,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 805,
        spell_id: 311,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 806,
        spell_id: 311,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 807,
        spell_id: 311,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 808,
        spell_id: 312,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 809,
        spell_id: 313,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 810,
        spell_id: 313,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 811,
        spell_id: 313,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 812,
        spell_id: 313,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 813,
        spell_id: 314,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 814,
        spell_id: 314,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 815,
        spell_id: 315,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 816,
        spell_id: 315,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 817,
        spell_id: 315,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 818,
        spell_id: 316,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 819,
        spell_id: 316,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 820,
        spell_id: 317,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 821,
        spell_id: 317,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 822,
        spell_id: 318,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 823,
        spell_id: 318,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 824,
        spell_id: 319,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 825,
        spell_id: 319,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 826,
        spell_id: 319,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 827,
        spell_id: 320,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 828,
        spell_id: 320,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 829,
        spell_id: 321,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 830,
        spell_id: 321,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 831,
        spell_id: 321,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 832,
        spell_id: 321,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 833,
        spell_id: 322,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 834,
        spell_id: 322,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 835,
        spell_id: 322,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 836,
        spell_id: 323,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 837,
        spell_id: 323,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 838,
        spell_id: 323,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 839,
        spell_id: 324,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 840,
        spell_id: 324,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 841,
        spell_id: 324,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 842,
        spell_id: 325,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 843,
        spell_id: 325,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 844,
        spell_id: 325,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 845,
        spell_id: 326,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 846,
        spell_id: 327,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 847,
        spell_id: 328,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 848,
        spell_id: 329,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 849,
        spell_id: 329,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 850,
        spell_id: 329,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 851,
        spell_id: 330,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 852,
        spell_id: 330,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 853,
        spell_id: 330,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 854,
        spell_id: 330,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 855,
        spell_id: 331,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 856,
        spell_id: 331,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 857,
        spell_id: 332,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 858,
        spell_id: 333,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 859,
        spell_id: 333,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 860,
        spell_id: 334,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 861,
        spell_id: 335,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 862,
        spell_id: 335,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 863,
        spell_id: 335,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 864,
        spell_id: 336,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 865,
        spell_id: 337,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 866,
        spell_id: 337,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 867,
        spell_id: 338,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 868,
        spell_id: 338,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 869,
        spell_id: 338,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 870,
        spell_id: 338,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 871,
        spell_id: 339,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 872,
        spell_id: 339,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 873,
        spell_id: 339,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 874,
        spell_id: 340,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 875,
        spell_id: 341,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 876,
        spell_id: 341,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 877,
        spell_id: 341,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 878,
        spell_id: 341,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 879,
        spell_id: 341,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 880,
        spell_id: 341,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 881,
        spell_id: 342,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 882,
        spell_id: 343,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 883,
        spell_id: 344,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 884,
        spell_id: 345,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 885,
        spell_id: 345,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 886,
        spell_id: 346,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 887,
        spell_id: 346,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 888,
        spell_id: 346,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 889,
        spell_id: 346,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 890,
        spell_id: 347,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 891,
        spell_id: 347,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 892,
        spell_id: 347,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 893,
        spell_id: 347,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 894,
        spell_id: 348,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 895,
        spell_id: 349,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 896,
        spell_id: 349,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 897,
        spell_id: 349,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 898,
        spell_id: 350,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 899,
        spell_id: 351,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 900,
        spell_id: 351,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 901,
        spell_id: 351,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 902,
        spell_id: 352,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 903,
        spell_id: 352,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 904,
        spell_id: 352,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 905,
        spell_id: 352,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 906,
        spell_id: 353,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 907,
        spell_id: 353,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 908,
        spell_id: 354,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 909,
        spell_id: 354,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 910,
        spell_id: 355,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 911,
        spell_id: 356,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 912,
        spell_id: 356,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 913,
        spell_id: 356,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 914,
        spell_id: 357,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 915,
        spell_id: 357,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 916,
        spell_id: 358,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 917,
        spell_id: 358,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 918,
        spell_id: 358,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 919,
        spell_id: 359,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 920,
        spell_id: 359,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 921,
        spell_id: 359,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 922,
        spell_id: 360,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 923,
        spell_id: 360,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 924,
        spell_id: 361,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 925,
        spell_id: 361,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 926,
        spell_id: 361,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 927,
        spell_id: 362,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 928,
        spell_id: 362,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 929,
        spell_id: 362,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 930,
        spell_id: 363,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 931,
        spell_id: 364,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 932,
        spell_id: 365,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 933,
        spell_id: 365,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 934,
        spell_id: 365,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 935,
        spell_id: 366,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 936,
        spell_id: 367,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 937,
        spell_id: 367,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 938,
        spell_id: 368,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 939,
        spell_id: 369,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 940,
        spell_id: 369,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 941,
        spell_id: 370,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 942,
        spell_id: 371,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 943,
        spell_id: 371,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 944,
        spell_id: 372,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 945,
        spell_id: 373,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 946,
        spell_id: 373,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 947,
        spell_id: 373,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 948,
        spell_id: 374,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 949,
        spell_id: 374,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 950,
        spell_id: 375,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 951,
        spell_id: 375,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 952,
        spell_id: 375,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 953,
        spell_id: 376,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 954,
        spell_id: 376,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 955,
        spell_id: 377,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 956,
        spell_id: 378,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 957,
        spell_id: 378,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 958,
        spell_id: 379,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 959,
        spell_id: 379,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 960,
        spell_id: 380,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 961,
        spell_id: 380,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 962,
        spell_id: 381,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 963,
        spell_id: 381,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 964,
        spell_id: 381,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 965,
        spell_id: 382,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 966,
        spell_id: 382,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 967,
        spell_id: 383,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 968,
        spell_id: 383,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 969,
        spell_id: 384,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 970,
        spell_id: 384,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 971,
        spell_id: 385,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 972,
        spell_id: 386,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 973,
        spell_id: 386,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 974,
        spell_id: 387,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 975,
        spell_id: 387,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 976,
        spell_id: 387,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 977,
        spell_id: 388,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 978,
        spell_id: 388,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 979,
        spell_id: 388,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 980,
        spell_id: 389,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 981,
        spell_id: 389,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 982,
        spell_id: 389,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 983,
        spell_id: 390,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 984,
        spell_id: 390,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 985,
        spell_id: 390,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 986,
        spell_id: 391,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 987,
        spell_id: 392,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 988,
        spell_id: 392,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 989,
        spell_id: 392,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 990,
        spell_id: 392,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 991,
        spell_id: 392,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 992,
        spell_id: 393,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 993,
        spell_id: 393,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 994,
        spell_id: 393,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 995,
        spell_id: 393,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 996,
        spell_id: 394,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 997,
        spell_id: 395,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 998,
        spell_id: 395,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 999,
        spell_id: 395,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1000,
        spell_id: 395,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1001,
        spell_id: 396,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1002,
        spell_id: 396,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1003,
        spell_id: 397,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1004,
        spell_id: 397,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1005,
        spell_id: 398,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1006,
        spell_id: 398,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1007,
        spell_id: 399,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1008,
        spell_id: 399,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1009,
        spell_id: 399,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1010,
        spell_id: 400,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1011,
        spell_id: 400,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1012,
        spell_id: 400,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1013,
        spell_id: 401,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1014,
        spell_id: 402,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1015,
        spell_id: 402,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1016,
        spell_id: 402,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1017,
        spell_id: 403,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1018,
        spell_id: 403,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1019,
        spell_id: 403,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1020,
        spell_id: 404,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1021,
        spell_id: 404,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1022,
        spell_id: 404,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1023,
        spell_id: 405,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1024,
        spell_id: 405,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1025,
        spell_id: 406,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1026,
        spell_id: 407,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1027,
        spell_id: 407,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1028,
        spell_id: 407,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1029,
        spell_id: 407,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1030,
        spell_id: 407,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1031,
        spell_id: 408,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1032,
        spell_id: 408,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1033,
        spell_id: 408,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1034,
        spell_id: 409,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1035,
        spell_id: 409,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1036,
        spell_id: 410,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1037,
        spell_id: 411,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1038,
        spell_id: 411,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1039,
        spell_id: 411,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1040,
        spell_id: 411,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1041,
        spell_id: 411,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1042,
        spell_id: 412,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1043,
        spell_id: 412,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1044,
        spell_id: 412,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1045,
        spell_id: 413,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1046,
        spell_id: 413,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1047,
        spell_id: 413,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1048,
        spell_id: 414,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1049,
        spell_id: 414,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1050,
        spell_id: 414,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1051,
        spell_id: 415,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1052,
        spell_id: 415,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1053,
        spell_id: 416,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1054,
        spell_id: 416,
        class_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1055,
        spell_id: 417,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1056,
        spell_id: 417,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1057,
        spell_id: 417,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1058,
        spell_id: 418,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1059,
        spell_id: 419,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1060,
        spell_id: 419,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1061,
        spell_id: 419,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1062,
        spell_id: 419,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1063,
        spell_id: 420,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1064,
        spell_id: 420,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1065,
        spell_id: 421,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1066,
        spell_id: 421,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1067,
        spell_id: 421,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1068,
        spell_id: 421,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1069,
        spell_id: 422,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1070,
        spell_id: 423,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1071,
        spell_id: 423,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1072,
        spell_id: 424,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1073,
        spell_id: 424,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1074,
        spell_id: 425,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1075,
        spell_id: 426,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1076,
        spell_id: 426,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1077,
        spell_id: 426,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1078,
        spell_id: 427,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1079,
        spell_id: 427,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1080,
        spell_id: 427,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1081,
        spell_id: 428,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1082,
        spell_id: 428,
        class_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1083,
        spell_id: 429,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1084,
        spell_id: 429,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1085,
        spell_id: 429,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1086,
        spell_id: 430,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1087,
        spell_id: 431,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1088,
        spell_id: 432,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1089,
        spell_id: 432,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1090,
        spell_id: 433,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1091,
        spell_id: 433,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1092,
        spell_id: 433,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1093,
        spell_id: 434,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1094,
        spell_id: 434,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1095,
        spell_id: 435,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1096,
        spell_id: 436,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1097,
        spell_id: 437,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1098,
        spell_id: 437,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1099,
        spell_id: 437,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1100,
        spell_id: 438,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1101,
        spell_id: 438,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1102,
        spell_id: 439,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1103,
        spell_id: 440,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1104,
        spell_id: 441,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1105,
        spell_id: 441,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1106,
        spell_id: 441,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1107,
        spell_id: 441,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1108,
        spell_id: 442,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1109,
        spell_id: 442,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1110,
        spell_id: 442,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1111,
        spell_id: 443,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1112,
        spell_id: 443,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1113,
        spell_id: 444,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1114,
        spell_id: 444,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1115,
        spell_id: 444,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1116,
        spell_id: 444,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1117,
        spell_id: 445,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1118,
        spell_id: 446,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1119,
        spell_id: 446,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1120,
        spell_id: 447,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1121,
        spell_id: 448,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1122,
        spell_id: 448,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1123,
        spell_id: 449,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1124,
        spell_id: 450,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1125,
        spell_id: 450,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1126,
        spell_id: 451,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1127,
        spell_id: 451,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1128,
        spell_id: 451,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1129,
        spell_id: 452,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1130,
        spell_id: 452,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1131,
        spell_id: 452,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1132,
        spell_id: 452,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1133,
        spell_id: 453,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1134,
        spell_id: 453,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1135,
        spell_id: 453,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1136,
        spell_id: 453,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1137,
        spell_id: 454,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1138,
        spell_id: 454,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1139,
        spell_id: 454,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1140,
        spell_id: 454,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1141,
        spell_id: 455,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1142,
        spell_id: 455,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1143,
        spell_id: 455,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1144,
        spell_id: 455,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1145,
        spell_id: 456,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1146,
        spell_id: 457,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1147,
        spell_id: 457,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1148,
        spell_id: 457,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1149,
        spell_id: 457,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1150,
        spell_id: 458,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1151,
        spell_id: 458,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1152,
        spell_id: 458,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1153,
        spell_id: 459,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1154,
        spell_id: 459,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1155,
        spell_id: 459,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1156,
        spell_id: 460,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1157,
        spell_id: 460,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1158,
        spell_id: 460,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1159,
        spell_id: 460,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1160,
        spell_id: 461,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1161,
        spell_id: 461,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1162,
        spell_id: 462,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1163,
        spell_id: 462,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1164,
        spell_id: 463,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1165,
        spell_id: 464,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1166,
        spell_id: 465,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1167,
        spell_id: 465,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1168,
        spell_id: 466,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1169,
        spell_id: 466,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1170,
        spell_id: 466,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1171,
        spell_id: 467,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1172,
        spell_id: 467,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1173,
        spell_id: 467,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1174,
        spell_id: 468,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1175,
        spell_id: 468,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1176,
        spell_id: 469,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1177,
        spell_id: 469,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1178,
        spell_id: 470,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1179,
        spell_id: 470,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1180,
        spell_id: 470,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1181,
        spell_id: 470,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1182,
        spell_id: 471,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1183,
        spell_id: 471,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1184,
        spell_id: 471,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1185,
        spell_id: 472,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1186,
        spell_id: 473,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1187,
        spell_id: 474,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1188,
        spell_id: 474,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1189,
        spell_id: 474,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1190,
        spell_id: 474,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1191,
        spell_id: 474,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1192,
        spell_id: 475,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1193,
        spell_id: 476,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1194,
        spell_id: 477,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1195,
        spell_id: 478,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1196,
        spell_id: 479,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1197,
        spell_id: 480,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1198,
        spell_id: 481,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1199,
        spell_id: 481,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1200,
        spell_id: 482,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1201,
        spell_id: 483,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1202,
        spell_id: 483,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1203,
        spell_id: 483,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1204,
        spell_id: 484,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1205,
        spell_id: 484,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1206,
        spell_id: 485,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1207,
        spell_id: 486,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1208,
        spell_id: 486,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1209,
        spell_id: 486,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1210,
        spell_id: 487,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1211,
        spell_id: 487,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1212,
        spell_id: 487,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1213,
        spell_id: 487,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1214,
        spell_id: 488,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1215,
        spell_id: 488,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1216,
        spell_id: 488,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1217,
        spell_id: 488,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1218,
        spell_id: 488,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1219,
        spell_id: 489,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1220,
        spell_id: 489,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1221,
        spell_id: 489,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1222,
        spell_id: 490,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1223,
        spell_id: 490,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1224,
        spell_id: 490,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1225,
        spell_id: 491,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1226,
        spell_id: 491,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1227,
        spell_id: 491,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1228,
        spell_id: 492,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1229,
        spell_id: 492,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1230,
        spell_id: 492,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1231,
        spell_id: 493,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1232,
        spell_id: 493,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1233,
        spell_id: 494,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1234,
        spell_id: 494,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1235,
        spell_id: 495,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1236,
        spell_id: 495,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1237,
        spell_id: 495,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1238,
        spell_id: 495,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1239,
        spell_id: 495,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1240,
        spell_id: 496,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1241,
        spell_id: 496,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1242,
        spell_id: 496,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1243,
        spell_id: 497,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1244,
        spell_id: 497,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1245,
        spell_id: 497,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1246,
        spell_id: 498,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1247,
        spell_id: 498,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1248,
        spell_id: 498,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1249,
        spell_id: 499,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1250,
        spell_id: 499,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1251,
        spell_id: 499,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1252,
        spell_id: 500,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1253,
        spell_id: 500,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1254,
        spell_id: 501,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1255,
        spell_id: 501,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1256,
        spell_id: 501,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1257,
        spell_id: 502,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1258,
        spell_id: 503,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1259,
        spell_id: 504,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1260,
        spell_id: 504,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1261,
        spell_id: 504,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1262,
        spell_id: 504,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1263,
        spell_id: 505,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1264,
        spell_id: 505,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1265,
        spell_id: 505,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1266,
        spell_id: 506,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1267,
        spell_id: 507,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1268,
        spell_id: 508,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1269,
        spell_id: 508,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1270,
        spell_id: 509,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1271,
        spell_id: 509,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1272,
        spell_id: 509,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1273,
        spell_id: 510,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1274,
        spell_id: 511,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1275,
        spell_id: 511,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1276,
        spell_id: 512,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1277,
        spell_id: 512,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1278,
        spell_id: 512,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1279,
        spell_id: 513,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1280,
        spell_id: 514,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1281,
        spell_id: 514,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1282,
        spell_id: 514,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1283,
        spell_id: 515,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1284,
        spell_id: 516,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1285,
        spell_id: 516,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1286,
        spell_id: 516,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1287,
        spell_id: 517,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1288,
        spell_id: 517,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1289,
        spell_id: 517,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1290,
        spell_id: 517,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1291,
        spell_id: 518,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1292,
        spell_id: 518,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1293,
        spell_id: 518,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1294,
        spell_id: 519,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1295,
        spell_id: 519,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1296,
        spell_id: 519,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1297,
        spell_id: 519,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1298,
        spell_id: 520,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1299,
        spell_id: 520,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1300,
        spell_id: 521,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1301,
        spell_id: 522,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1302,
        spell_id: 523,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1303,
        spell_id: 523,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1304,
        spell_id: 523,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1305,
        spell_id: 524,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1306,
        spell_id: 524,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1307,
        spell_id: 525,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1308,
        spell_id: 526,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1309,
        spell_id: 527,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1310,
        spell_id: 527,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1311,
        spell_id: 528,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1312,
        spell_id: 528,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1313,
        spell_id: 528,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1314,
        spell_id: 528,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1315,
        spell_id: 529,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1316,
        spell_id: 530,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1317,
        spell_id: 530,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1318,
        spell_id: 530,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1319,
        spell_id: 530,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1320,
        spell_id: 531,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1321,
        spell_id: 532,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1322,
        spell_id: 533,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1323,
        spell_id: 533,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1324,
        spell_id: 533,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1325,
        spell_id: 534,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1326,
        spell_id: 534,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1327,
        spell_id: 534,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1328,
        spell_id: 535,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1329,
        spell_id: 535,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1330,
        spell_id: 535,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1331,
        spell_id: 535,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1332,
        spell_id: 536,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1333,
        spell_id: 536,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1334,
        spell_id: 536,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1335,
        spell_id: 536,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1336,
        spell_id: 537,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1337,
        spell_id: 537,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1338,
        spell_id: 538,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1339,
        spell_id: 539,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1340,
        spell_id: 540,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1341,
        spell_id: 540,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1342,
        spell_id: 540,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1343,
        spell_id: 541,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1344,
        spell_id: 541,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1345,
        spell_id: 542,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1346,
        spell_id: 542,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1347,
        spell_id: 543,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1348,
        spell_id: 543,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1349,
        spell_id: 543,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1350,
        spell_id: 543,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1351,
        spell_id: 544,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1352,
        spell_id: 544,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1353,
        spell_id: 545,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1354,
        spell_id: 545,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1355,
        spell_id: 545,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1356,
        spell_id: 545,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1357,
        spell_id: 546,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1358,
        spell_id: 547,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1359,
        spell_id: 547,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1360,
        spell_id: 547,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1361,
        spell_id: 548,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1362,
        spell_id: 549,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1363,
        spell_id: 550,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1364,
        spell_id: 550,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1365,
        spell_id: 551,
        class_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1366,
        spell_id: 551,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1367,
        spell_id: 551,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1368,
        spell_id: 552,
        class_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1369,
        spell_id: 552,
        class_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1370,
        spell_id: 553,
        class_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1371,
        spell_id: 553,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1372,
        spell_id: 554,
        class_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1373,
        spell_id: 554,
        class_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClassesSpells', null, {});
  }
};
