'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterSpell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
      this.belongsTo(models.Spell, {foreignKey: 'spell_id'});
    }
  }
  CharacterSpell.init({
    character_id: DataTypes.INTEGER,
    spell_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CharacterSpell',
  });
  return CharacterSpell;
};