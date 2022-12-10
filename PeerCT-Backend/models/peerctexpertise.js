'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTExpertise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTExpertise.belongsTo(models.peerCTMentor,{foreignKey:"mentor_id"});

    }
  }
  peerCTExpertise.init({
    mentor_id: DataTypes.INTEGER,
    expertise: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peerCTExpertise',
  });
  return peerCTExpertise;
};