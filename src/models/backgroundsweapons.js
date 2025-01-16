'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BackgroundsWeapons extends Model {
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
      this.belongsTo(models.Weapons, {
        foreignKey: 'weapon_id'
      })
    }
  }
  BackgroundsWeapons.init({
    background_id: DataTypes.INTEGER,
    weapon_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    option: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BackgroundsWeapons',
  });
  return BackgroundsWeapons;
};