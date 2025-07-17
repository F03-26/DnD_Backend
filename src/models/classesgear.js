'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassesGear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Class, {foreignKey: 'class_id'});
      this.belongsTo(models.Gear, {foreignKey: 'gear_id'});
    }
  }
  ClassesGear.init({
    class_id: DataTypes.INTEGER,
    gear_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    option: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassesGear',
  });
  return ClassesGear;
};