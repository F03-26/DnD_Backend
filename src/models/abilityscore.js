'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AbilityScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Class, {
        foreignKey: 'primary_ability_1'
      });
      this.hasMany(models.Class, {
        foreignKey: 'primary_ability_2'
      });
      this.hasMany(models.Class, {
        foreignKey: 'saving_throws_1'
      });
      this.hasMany(models.Class, {
        foreignKey: 'saving_throws_2'
      });

      this.hasMany(models.Tool, {
        foreignKey: 'ability_id'
      });

      this.hasMany(models.Abilities, {
        foreignKey: 'ability_id',
        
      });

      this.hasMany(models.Background, {
        foreignKey: 'ability_score_1'
      });
      this.hasMany(models.Background, {
        foreignKey: 'ability_score_2'
      });
      this.hasMany(models.Background, {
        foreignKey: 'ability_score_3'
      });
    }
  }
  AbilityScore.init({
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    score: DataTypes.INTEGER,
    modifier: DataTypes.INTEGER,
    base: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AbilityScore',
  });
  return AbilityScore;
};