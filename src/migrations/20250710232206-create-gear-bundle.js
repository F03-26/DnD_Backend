'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GearBundles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bundle_id: {
        references: {
          model: 'Gears',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      gear_id: {
        references: {
          model: 'Gears',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      amount: {
        defaultValue: 1,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GearBundles');
  }
};