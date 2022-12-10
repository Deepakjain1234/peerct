'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTCategory.hasMany(models.peerCTProduct,{foreignKey:"category_id"})
    }
  }
  peerCTCategory.init({
    name: DataTypes.STRING,
    info1: DataTypes.TEXT,
    info2: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTCategory',
  });
  return peerCTCategory;
};