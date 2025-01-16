'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Class, {through: models.ClassesCoins, foreignKey: 'coin_id', otherKey: 'class_id'});
      this.belongsToMany(models.Background, {through: models.BackgroundsCoin, foreignKey: 'coin_id', otherKey: 'background_id'});
    }
  }
  Coin.init({
    name: DataTypes.STRING,
    value: DataTypes.FLOAT,
    value_string: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coin',
  });
  return Coin;
};