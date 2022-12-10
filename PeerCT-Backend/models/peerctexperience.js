'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTExperience.belongsTo(models.peerCTCompany,{foreignKey:"company_id"});
      peerCTExperience.belongsTo(models.peerCTMentor,{foreignKey:"mentor_id"});

    }
  }
  peerCTExperience.init({
    mentor_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTExperience',
  });
  return peerCTExperience;
};