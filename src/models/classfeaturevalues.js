'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassFeatureValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
    }
  }
  ClassFeatureValues.init({
    level: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    proficiency_bonus: DataTypes.INTEGER,
    feature_1: DataTypes.INTEGER,
    feature_2: DataTypes.INTEGER,
    feature_3: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassFeatureValues',
  });
  return ClassFeatureValues;
};