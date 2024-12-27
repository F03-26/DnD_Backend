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

    await queryInterface.bulkInsert('AbilityScores', [{
      id: 1,
      type: 'Fuerza',
      description: 'La Fuerza indica la condición física, el entrenamiento atlético y la cantidad de fuerza bruta que se puede ejercer.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      type: 'Destreza',
      description: 'La Destreza indica la agilidad, los reflejos y el equilibrio.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      type: 'Constitución',
      description: 'La Constitución indica el estado de salud, el aguante y la fuerza vital.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      type: 'Inteligencia',
      description: 'La Inteligencia indica la agudeza mental, la retentiva y la capacidad para razonar.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      type: 'Sabiduría',
      description: 'La Sabiduría indica hasta qué punto estás en sintonía con el mundo que te rodea, reflejando tu perspicacia e intuición.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      type: 'Carisma',
      description: 'El Carisma indica tu capacidad para interaccionar con los demás de forma efectiva. Incluye aspectos como la confianza y la elocuencia, y también puede representar una personalidad encantadora o imponente.',
      score: 0,
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AbilityScores', null, {});
  }
};
