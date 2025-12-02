'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassesLevelSpells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      class_id: {
        references: {
          model: 'Classes',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER
      },
      cantrips: {
        type: Sequelize.INTEGER
      },
      prepared_spells: {
        type: Sequelize.INTEGER
      },
      spell_slots_1: {
        type: Sequelize.INTEGER
      },
      spell_slots_2: {
        type: Sequelize.INTEGER
      },
      spell_slots_3: {
        type: Sequelize.INTEGER
      },
      spell_slots_4: {
        type: Sequelize.INTEGER
      },
      spell_slots_5: {
        type: Sequelize.INTEGER
      },
      spell_slots_6: {
        type: Sequelize.INTEGER
      },
      spell_slots_7: {
        type: Sequelize.INTEGER
      },
      spell_slots_8: {
        type: Sequelize.INTEGER
      },
      spell_slots_9: {
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
    await queryInterface.dropTable('ClassesLevelSpells');
  }
};