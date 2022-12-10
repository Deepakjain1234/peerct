'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTCalender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTCalender.belongsTo(models.peerCTMentor,{foreignKey:"mentor_id"});
    }
  }
  peerCTCalender.init({
    mentor_id: DataTypes.INTEGER,
    day: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peerCTCalender',
  });
  return peerCTCalender;
};