'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTCompany.hasMany(models.peerCTMentor,{foreignKey:"company_id"});
      peerCTCompany.hasMany(models.peerCTExperience,{foreignKey:"company_id"});


    }
  }
  peerCTCompany.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTCompany',
  });
  return peerCTCompany;
};