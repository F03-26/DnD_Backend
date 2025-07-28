'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassesSpells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Class, { foreignKey: 'class_id' });
      this.belongsTo(models.Spell, { foreignKey: 'spell_id' });
    }
  }
  ClassesSpells.init({
    spell_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassesSpells',
  });
  return ClassesSpells;
};