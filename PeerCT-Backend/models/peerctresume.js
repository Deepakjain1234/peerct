'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTResume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTResume.belongsTo(models.peerCTUser,{foreignKey:"user_id"})
    }
  }
  peerCTResume.init({
    user_id: DataTypes.INTEGER,
    resume: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTResume',
  });
  return peerCTResume;
};