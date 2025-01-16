'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.AbilityScore, {
        as: 'Ability score',
        foreignKey: 'ability_id',
        onDelete: 'CASCADE'
      });

      this.belongsTo(models.Class, {through: models.ClassesAbilities, foreignKey: 'ability_id', otherKey: 'class_id'});
    }
  }
  Abilities.init({
    ability_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    modifier: DataTypes.INTEGER,
    base: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Abilities',
  });
  return Abilities;
};