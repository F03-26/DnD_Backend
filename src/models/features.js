'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Class, {
        foreignKey: 'class_id',
      })
    }
  }
  Features.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Features',
  });
  return Features;
};