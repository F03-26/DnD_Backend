'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Class, {through: models.ClassesGear, foreignKey: 'gear_id', otherKey: 'class_id'});
      this.belongsToMany(models.Background, {through: models.BackgroundsTools, foreignKey: 'gear_id', otherKey: 'background_id'});
    }
  }
  Gear.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    weight: DataTypes.FLOAT,
    cost: DataTypes.STRING,
    base: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Gear',
  });
  return Gear;
};