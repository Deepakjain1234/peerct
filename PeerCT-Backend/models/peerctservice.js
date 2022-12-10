'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTService.hasMany(models.peerCTMentorService,{foreignKey:"service_id"});
    }
  }
  peerCTService.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peerCTService',
  });
  return peerCTService;
};