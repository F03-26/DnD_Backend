'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Background extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.AbilityScore, {
        as: 'Ability score 1',
        foreignKey: 'ability_score_1',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.AbilityScore, {
        as: 'Ability score 2',
        foreignKey: 'ability_score_2',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.AbilityScore, {
        as: 'Ability score 3',
        foreignKey: 'ability_score_3',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.Feat, {
        as: 'Feat',
        foreignKey: 'feat_id',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.Abilities, {
        as: 'Skill 1',
        foreignKey: 'skill_prof_1',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.Abilities, {
        as: 'Skill 2',
        foreignKey: 'skill_prof_2',
        onDelete: 'SET NULL'
      });

      this.belongsToMany(models.Weapons, {through: models.BackgroundsWeapons, foreignKey: 'background_id', otherKey: 'weapon_id'});
      this.belongsToMany(models.Gear, {through: models.BackgroundsWeapons, foreignKey: 'background_id', otherKey: 'gear_id'});
      this.belongsToMany(models.Coin, {through: models.BackgroundsCoin, foreignKey: 'background_id', otherKey: 'coin_id'});
      this.belongsToMany(models.Tool, {through: models.BackgroundsTools, foreignKey: 'background_id', otherKey: 'tool_id'});
    }
  }
  Background.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    ability_score_1: DataTypes.INTEGER,
    ability_score_2: DataTypes.INTEGER,
    ability_score_3: DataTypes.INTEGER,
    feat_id: DataTypes.INTEGER,
    skill_prof_1: DataTypes.INTEGER,
    skill_prof_2: DataTypes.INTEGER,
    tool_profs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Background',
  });
  return Background;
};