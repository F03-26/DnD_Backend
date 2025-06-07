'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Language, {foreignKey: 'language_id'});
    }
  }
  CharacterLanguage.init({
    character_id: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterLanguage',
  });
  return CharacterLanguage;
};