'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class_id: {
        references: {
          model: 'Classes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      background_id: {
        references: {
          model: 'Backgrounds',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      race_id: {
        references: {
          model: 'Races',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      alignment_id: {
        references: {
          model: 'Alignments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      xp_points: {
        type: Sequelize.INTEGER
      },
      strength_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      dexterity_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      constitution_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      inteligence_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      wisdom_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      charisma_id: {
        references: {
          model: 'AbilityScores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      proficiency_bonus: {
        type: Sequelize.INTEGER
      },
      inspiration: {
        type: Sequelize.INTEGER
      },
      passive_perception: {
        type: Sequelize.INTEGER
      },
      initiative: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      max_hit_points: {
        type: Sequelize.INTEGER
      },
      hit_points: {
        type: Sequelize.INTEGER
      },
      temporal_hit_points: {
        type: Sequelize.INTEGER
      },
      hit_dice_used: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      backstory: {
        type: Sequelize.TEXT
      },
      personality: {
        type: Sequelize.TEXT
      },
      copper_pieces: {
        type: Sequelize.INTEGER
      },
      silver_pieces: {
        type: Sequelize.INTEGER
      },
      electrum_pieces: {
        type: Sequelize.INTEGER
      },
      gold_pieces: {
        type: Sequelize.INTEGER
      },
      platinum_pieces: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Characters');
  }
};