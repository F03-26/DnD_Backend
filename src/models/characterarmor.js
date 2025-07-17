'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterArmor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Armor, {foreignKey: 'armor_id'});
    }
  }
  CharacterArmor.init({
    character_id: DataTypes.INTEGER,
    armor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterArmor',
  });
  return CharacterArmor;
};