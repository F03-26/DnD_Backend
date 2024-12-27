'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ability_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      utilize: {
        type: Sequelize.STRING
      },
      craft: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.STRING
      },
      profesion: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Tools');
  }
};