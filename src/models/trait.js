'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Race, {
        foreignKey: 'race_id'
      })
    }
  }
  Trait.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    race_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trait',
  });
  return Trait;
};