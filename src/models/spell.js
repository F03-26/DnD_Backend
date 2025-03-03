'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spell.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    school: DataTypes.STRING,
    casting_time: DataTypes.STRING,
    range: DataTypes.STRING,
    components: DataTypes.STRING,
    duration: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Spell',
  });
  return Spell;
};