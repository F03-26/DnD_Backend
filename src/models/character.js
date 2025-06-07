'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Class, {
        foreignKey: 'class_id'
      })

      this.belongsTo(models.Background, {
        foreignKey: 'background_id'
      })

      this.belongsTo(models.Race, {
        foreignKey: 'race_id'
      })

      this.belongsTo(models.Alignment, {
        foreignKey: 'alignment_id'
      })

      this.belongsTo(models.AbilityScore, {
        as: 'strength',
        foreignKey: 'strength_id',
        onDelete: 'SET NULL'
      })

      this.belongsTo(models.AbilityScore, {
        as: 'dexterity',
        foreignKey: 'dexterity_id',
        onDelete: 'SET NULL'
      })

      this.belongsTo(models.AbilityScore, {
        as: 'constitution',
        foreignKey: 'constitution_id',
        onDelete: 'SET NULL'
      })
      
      this.belongsTo(models.AbilityScore, {
        as: 'inteligence',
        foreignKey: 'inteligence_id',
        onDelete: 'SET NULL'
      })

      this.belongsTo(models.AbilityScore, {
        as: 'wisdom',
        foreignKey: 'wisdom_id',
        onDelete: 'SET NULL'
      })

      this.belongsTo(models.AbilityScore, {
        as: 'charisma',
        foreignKey: 'charisma_id',
        onDelete: 'SET NULL'
      })

      this.hasMany(models.Proficiency, {
        as: 'profs',
        foreignKey: 'character_id',
        onDelete: 'CASCADE'
      });

      this.belongsToMany(models.Armor, {through: models.CharacterArmor, foreignKey: 'character_id', otherKey: 'armor_id'});
      this.belongsToMany(models.Weapons, {through: models.CharacterWeapon, foreignKey: 'character_id', otherKey: 'weapon_id'});
      this.belongsToMany(models.Tool, {through: models.CharacterTool, foreignKey: 'character_id', otherKey: 'tool_id'});
      this.belongsToMany(models.Gear, {through: models.CharacterGear, foreignKey: 'character_id', otherKey: 'gear_id'});
      this.belongsToMany(models.Feat, {through: models.CharacterFeat, foreignKey: 'character_id', otherKey: 'feat_id'});
      this.belongsToMany(models.Spell, {through: models.CharacterSpell, foreignKey: 'character_id', otherKey: 'spell_id'});
      this.belongsToMany(models.Trait, {through: models.CharacterTrait, foreignKey: 'character_id', otherKey: 'trait_id'});
      this.belongsToMany(models.Language, {through: models.CharacterLanguage, foreignKey: 'character_id', otherKey: 'language_id'});
    }
  }
  Character.init({
    uid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    background_id: DataTypes.INTEGER,
    race_id: DataTypes.INTEGER,
    alignment_id: DataTypes.INTEGER,
    xp_points: DataTypes.INTEGER,
    strength_id: DataTypes.INTEGER,
    dexterity_id: DataTypes.INTEGER,
    constitution_id: DataTypes.INTEGER,
    inteligence_id: DataTypes.INTEGER,
    wisdom_id: DataTypes.INTEGER,
    charisma_id: DataTypes.INTEGER,
    proficiency_bonus: DataTypes.INTEGER,
    inspiration: DataTypes.INTEGER,
    passive_perception: DataTypes.INTEGER,
    initiative: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    max_hit_points: DataTypes.INTEGER,
    hit_points: DataTypes.INTEGER,
    temporal_hit_points: DataTypes.INTEGER,
    hit_dice_used: DataTypes.INTEGER,
    backstory: DataTypes.TEXT,
    personality: DataTypes.TEXT,
    copper_pieces: DataTypes.INTEGER,
    silver_pieces: DataTypes.INTEGER,
    electrum_pieces: DataTypes.INTEGER,
    gold_pieces: DataTypes.INTEGER,
    platinum_pieces: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};