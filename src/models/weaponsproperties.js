'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeaponsProperties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  WeaponsProperties.init({
    weapon_id: DataTypes.INTEGER,
    property_id: DataTypes.INTEGER,
    values: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WeaponsProperties',
  });
  return WeaponsProperties;
};