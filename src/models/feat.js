'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Background, {
        foreignKey: 'feat_id'
      });
    }
  }
  Feat.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    prerequisite: DataTypes.STRING,
    benefits: DataTypes.TEXT,
    repeatable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Feat',
  });
  return Feat;
};