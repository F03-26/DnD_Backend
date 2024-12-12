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
      // define association here
    }
  }
  Class.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    primary_ability_id: DataTypes.INTEGER,
    hit_point_die: DataTypes.STRING,
    saving_throws: DataTypes.STRING,
    skill_profs: DataTypes.STRING,
    weapon_profs: DataTypes.STRING,
    armor_train: DataTypes.STRING,
    start_equip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};