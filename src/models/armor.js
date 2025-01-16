'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Class, {through: models.ClassesArmor, foreignKey: 'armor_id', otherKey: 'class_id'});
    }
  }
  Armor.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    armor_class: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    stealth_dis: DataTypes.BOOLEAN,
    weight: DataTypes.FLOAT,
    cost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Armor',
  });
  return Armor;
};