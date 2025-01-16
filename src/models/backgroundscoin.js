'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackgroundsCoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Background, {
        foreignKey: 'background_id'
      });
      this.belongsTo(models.Coin, {
        foreignKey: 'coin_id'
      });
    }
  }
  BackgroundsCoin.init({
    background_id: DataTypes.INTEGER,
    coin_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    option: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BackgroundsCoin',
  });
  return BackgroundsCoin;
};