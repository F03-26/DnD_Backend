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
    await queryInterface.bulkInsert('Languages', [{
      id: 1,
      name: 'Común',
      origin: 'Sigilo',
      speakers: 'Humanos',
      alphabet: 'Común',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Común de señas',
      origin: 'Sigilo',
      speakers: 'Humanos',
      alphabet: null,
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Dracónido',
      origin: 'Dragones',
      speakers: 'Dragones, dracónidos',
      alphabet: 'Dracónido',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Enano',
      origin: 'Enanos',
      speakers: 'Enanos',
      alphabet: 'Enano',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Élfico',
      origin: 'Elfos',
      speakers: 'Elfos',
      alphabet: 'Elfo',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Gigante',
      origin: 'Gigantes',
      speakers: 'Ogros, Gigantes',
      alphabet: 'Enano',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Gnomo',
      origin: 'Gnomos',
      speakers: 'Gnomos',
      alphabet: 'Enano',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Goblin',
      origin: 'Goblins',
      speakers: 'Trasgos',
      alphabet: 'Enano',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Halfling',
      origin: 'Halflings',
      speakers: 'Halflings',
      alphabet: 'Común',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Orco',
      origin: 'Orcos',
      speakers: 'Orcos',
      alphabet: 'Enano',
      rare: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Abisal',
      origin: 'Demonios del abismo',
      speakers: 'Demonios',
      alphabet: 'Infernal',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Celestial',
      origin: 'Celestiales',
      speakers: 'Celestiales',
      alphabet: 'Celestial',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: 'Habla de las profundidades',
      origin: 'Aberraciones',
      speakers: 'Azotamentes, contempladores',
      alphabet: null,
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: 'Druídico',
      origin: 'Círculos druídicos',
      speakers: null,
      alphabet: null,
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: 'Infernal',
      origin: 'Diablos de los nueve infiernos',
      speakers: 'Diablos',
      alphabet: 'Infernal',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: 'Primordial',
      origin: 'Elementales',
      speakers: 'Elementales',
      alphabet: 'Enano',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      name: 'Silvano',
      origin: 'Feéricos',
      speakers: 'Seres feéricos',
      alphabet: 'Elfo',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      name: 'Jerga de los ladrones',
      origin: 'Varios gremios de ladrones',
      speakers: null,
      alphabet: 'Común',
      rare: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      name: 'Infracomún',
      origin: 'La infraoscuridad',
      speakers: null,
      alphabet: null,
      rare: true,
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
    await queryInterface.bulkDelete('Languages', null, {});
  }
};
