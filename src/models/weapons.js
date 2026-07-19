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
      this.belongsToMany(models.Class, {through: models.ClassesWeapons, foreignKey: 'weapon_id', otherKey: 'class_id'});

      this.belongsToMany(models.Background, {through: models.BackgroundsWeapons, foreignKey: 'weapon_id', otherKey: 'background_id'});

      this.belongsToMany(models.Character, {through: models.CharacterWeapon, foreignKey: 'weapon_id', otherKey: 'character_id'});

      this.belongsToMany(models.Properties, {through: models.WeaponsProperties, foreignKey: 'weapon_id', otherKey: 'property_id'});
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