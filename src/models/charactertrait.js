'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterTrait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Trait, {foreignKey: 'trait_id'});
    }
  }
  CharacterTrait.init({
    character_id: DataTypes.INTEGER,
    trait_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterTrait',
  });
  return CharacterTrait;
};