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
    await queryInterface.bulkInsert('Armors', [{
      id: 1,
      name: 'Armadura acolchada',
      category: 'Ligera',
      armor_class: 11,
      strength: 0,
      stealth_dis: true,
      weight: 8,
      cost: '5 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Armadura de cuero',
      category: 'Ligera',
      armor_class: 11,
      strength: 0,
      stealth_dis: false,
      weight: 10,
      cost: '10 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Armadura de cuero tachonado',
      category: 'Ligera',
      armor_class: 12,
      strength: 0,
      stealth_dis: false,
      weight: 13,
      cost: '45 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Camisa de malla',
      category: 'Media',
      armor_class: 13,
      strength: 0,
      stealth_dis: false,
      weight: 20,
      cost: '50 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Cota de escamas',
      category: 'Media',
      armor_class: 14,
      strength: 0,
      stealth_dis: true,
      weight: 45,
      cost: '50 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Coraza',
      category: 'Media',
      armor_class: 14,
      strength: 0,
      stealth_dis: false,
      weight: 20,
      cost: '400 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Media Armadura',
      category: 'Media',
      armor_class: 15,
      strength: 0,
      stealth_dis: true,
      weight: 40,
      cost: '750 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Armadura de pieles',
      category: 'Media',
      armor_class: 12,
      strength: 0,
      stealth_dis: false,
      weight: 12,
      cost: '10 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Armadura de bandas',
      category: 'Pesada',
      armor_class: 17,
      strength: 15,
      stealth_dis: true,
      weight: 60,
      cost: '200 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Armadura de placas',
      category: 'Pesada',
      armor_class: 18,
      strength: 15,
      stealth_dis: true,
      weight: 65,
      cost: '1500 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Cota guarnecida',
      category: 'Pesada',
      armor_class: 14,
      strength: 0,
      stealth_dis: true,
      weight: 40,
      cost: '30 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Cota de malla',
      category: 'Pesada',
      armor_class: 16,
      strength: 13,
      stealth_dis: true,
      weight: 55,
      cost: '75 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: 'Escudo',
      category: 'Escudo',
      armor_class: 2,
      strength: 0,
      stealth_dis: false,
      weight: 6,
      cost: '10 GP',
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

      await queryInterface.bulkDelete('Armors', null, {});
  }
};
