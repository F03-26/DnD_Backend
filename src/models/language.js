'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Character, {through: models.CharacterLanguage, foreignKey: 'language_id', otherKey: 'character_id'});
    }
  }
  Language.init({
    name: DataTypes.STRING,
    origin: DataTypes.STRING,
    speakers: DataTypes.STRING,
    alphabet: DataTypes.STRING,
    rare: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};