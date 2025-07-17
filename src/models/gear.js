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
      this.belongsToMany(models.Background, {through: models.BackgroundsGear, foreignKey: 'gear_id', otherKey: 'background_id'});
      this.belongsToMany(models.Character, {through: models.CharacterGear, foreignKey: 'gear_id', otherKey: 'character_id'});
      this.belongsToMany(models.Gear, {through: models.GearBundle, foreignKey: 'bundle_id', otherKey: 'gear_id', as: 'bundle'});
      this.belongsToMany(models.Gear, {through: models.GearBundle, foreignKey: 'gear_id', otherKey: 'bundle_id', as: 'gear'});

      this.hasMany(models.GearBundle, { foreignKey: 'bundle_id', as: 'BundleGearBundles' });
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