'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTUserCollege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTUserCollege.hasMany(models.peerCTUser,{foreignKey:'college_id'});
      peerCTUserCollege.hasMany(models.peerCTProduct,{foreignKey:'college_id'});
    }
  }
  peerCTUserCollege.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    university: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peerCTUserCollege',
  });
  return peerCTUserCollege;
};