'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassesLevelSpells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
    }
  }
  ClassesLevelSpells.init({
    level: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    cantrips: DataTypes.INTEGER,
    prepared_spells: DataTypes.INTEGER,
    spell_slots_1: DataTypes.INTEGER,
    spell_slots_2: DataTypes.INTEGER,
    spell_slots_3: DataTypes.INTEGER,
    spell_slots_4: DataTypes.INTEGER,
    spell_slots_5: DataTypes.INTEGER,
    spell_slots_6: DataTypes.INTEGER,
    spell_slots_7: DataTypes.INTEGER,
    spell_slots_8: DataTypes.INTEGER,
    spell_slots_9: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassesLevelSpells',
  });
  return ClassesLevelSpells;
};