'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTUnavailableDates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTUnavailableDates.belongsTo(models.peerCTMentor, { foreignKey: "mentor_id" })
    }
  }
  peerCTUnavailableDates.init({
    mentor_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'peerCTUnavailableDates',
  });
  return peerCTUnavailableDates;
};