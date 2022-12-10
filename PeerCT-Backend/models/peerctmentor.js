'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTMentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTMentor.belongsTo(models.peerCTUser, {
        foreignKey: "user_id"
      });
      peerCTMentor.belongsTo(models.peerCTCompany, {
        foreignKey: "company_id"
      });
      peerCTMentor.hasMany(models.peerCTExperience, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTExpertise, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTMentorService, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTGroupSession, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTOneToOneSessionOrder, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTReview, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTCalender, {
        foreignKey: "mentor_id"
      });
      peerCTMentor.hasMany(models.peerCTUnavailableDates, { foreignKey: "mentor_id" });
    }
  }
  peerCTMentor.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    start_time: DataTypes.STRING, // format = "10:30 and 15:30"
    end_time: DataTypes.STRING,
    portfolio_website: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    domain: DataTypes.STRING,
    approve: DataTypes.BOOLEAN,
    experience: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
    language: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'peerCTMentor',
  });
  return peerCTMentor;
};
