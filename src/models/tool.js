'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.AbilityScore, {
        as: 'Ability',
        foreignKey: 'ability_id',
        onDelete: 'SET NULL'
      })
    }
  }
  Tool.init({
    name: DataTypes.STRING,
    ability_id: DataTypes.INTEGER,
    utilize: DataTypes.STRING,
    craft: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    cost: DataTypes.STRING,
    profesion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tool',
  });
  return Tool;
};