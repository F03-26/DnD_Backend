'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackgroundsGear extends Model {
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
      this.belongsTo(models.Gear, {
        foreignKey: 'gear_id'
      });
    }
  }
  BackgroundsGear.init({
    background_id: DataTypes.INTEGER,
    gear_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    option: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BackgroundsGear',
  });
  return BackgroundsGear;
};