'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Process.belongsTo(models.Topic,{foreignKey:"codeTopic",targetKey:"code",as:"topic"});
    }
  }
  Process.init({
    code: DataTypes.STRING,
    codeTopic: DataTypes.STRING,
    title: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN,
    isDelete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Process',
  });
  return Process;
};