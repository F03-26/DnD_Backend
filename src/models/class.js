'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.AbilityScore, {
        as: 'Primary Ability 1',
        foreignKey: 'primary_ability_1',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.AbilityScore, {
        as: 'Primary Ability 2',
        foreignKey: 'primary_ability_2',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.AbilityScore, {
        as: 'Saving Throws 1',
        foreignKey: 'saving_throws_1',
        onDelete: 'SET NULL'
      });
      this.belongsTo(models.AbilityScore, {
        as: 'Saving Throws 2',
        foreignKey: 'saving_throws_2',
        onDelete: 'SET NULL'
      });

      this.belongsToMany(models.Abilities, {through: models.ClassesAbilities, foreignKey: 'class_id', otherKey: 'ability_id'});
      this.belongsToMany(models.Armor, {through: models.ClassesArmor, foreignKey: 'class_id', otherKey: 'armor_id'});
      this.belongsToMany(models.Weapons, {through: models.ClassesWeapons, foreignKey: 'class_id', otherKey: 'weapon_id'});
      this.belongsToMany(models.Gear, {through: models.ClassesGear, foreignKey: 'class_id', otherKey: 'gear_id'});
    }
  }
  Class.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    primary_ability_1: DataTypes.INTEGER,
    primary_ability_2: DataTypes.INTEGER,
    hit_point_die: DataTypes.STRING,
    saving_throws_1: DataTypes.INTEGER,
    saving_throws_2: DataTypes.INTEGER,
    skill_profs: DataTypes.STRING,
    weapon_profs: DataTypes.STRING,
    armor_train: DataTypes.STRING,
    tool_profs: DataTypes.STRING,
    start_equip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};