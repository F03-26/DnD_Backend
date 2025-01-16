'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassesCoins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Class, {foreignKey: 'class_id'});
      this.belongsTo(models.Coin, {foreignKey: 'coin_id'});
    }
  }
  ClassesCoins.init({
    class_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    option: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassesCoins',
  });
  return ClassesCoins;
};