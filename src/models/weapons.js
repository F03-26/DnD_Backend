'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Class, {through: models.ClassesWeapons, foreignKey: 'weapon_id', otherKey: 'class_id'});
    }
  }
  Weapons.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    damage_die: DataTypes.STRING,
    damage_type: DataTypes.STRING,
    mastery: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    cost: DataTypes.STRING,
    base: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Weapons',
  });
  return Weapons;
};