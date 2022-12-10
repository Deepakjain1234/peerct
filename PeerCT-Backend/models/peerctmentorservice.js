'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTMentorService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTMentorService.belongsTo(models.peerCTMentor,{foreignKey:"mentor_id"});
      peerCTMentorService.belongsTo(models.peerCTService,{foreignKey:"service_id"});
      peerCTMentorService.hasMany(models.peerCTOneToOneSessionOrder,{foreignKey:"service_id"})

    }
  }
  peerCTMentorService.init({
    mentor_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTMentorService',
  });
  return peerCTMentorService;
};