'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Tool, {foreignKey: 'tool_id'});
    }
  }
  CharacterTool.init({
    character_id: DataTypes.INTEGER,
    tool_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterTool',
  });
  return CharacterTool;
};