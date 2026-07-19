'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterGear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Gear, {foreignKey: 'gear_id'});
    }
  }
  CharacterGear.init({
    character_id: DataTypes.INTEGER,
    gear_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterGear',
  });
  return CharacterGear;
};