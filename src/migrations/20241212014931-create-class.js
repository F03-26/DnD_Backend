'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      primary_ability_1: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      primary_ability_2: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      hit_point_die: {
        type: Sequelize.STRING
      },
      saving_throws_1: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      saving_throws_2: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      skill_profs: {
        type: Sequelize.STRING
      },
      weapon_profs: {
        type: Sequelize.STRING
      },
      armor_train: {
        type: Sequelize.STRING
      },
      tool_profs: {
        type: Sequelize.STRING
      },
      start_equip: {
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
    await queryInterface.dropTable('Classes');
  }
};