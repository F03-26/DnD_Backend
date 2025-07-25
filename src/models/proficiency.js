'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proficiency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character, {foreignKey: 'character_id'});
    }
  }
  Proficiency.init({
    type: DataTypes.STRING,
    data: DataTypes.STRING,
    character_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Proficiency',
  });
  return Proficiency;
};