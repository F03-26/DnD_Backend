'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate(models) {
    }
  }
  Levels.init({
    level: DataTypes.INTEGER,
    xp_start: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Levels',
  });
  return Levels;
};