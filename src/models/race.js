'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Trait, {
        foreignKey: 'race_id'
      })
    }
  }
  Race.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    size_range: DataTypes.STRING,
    speed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};