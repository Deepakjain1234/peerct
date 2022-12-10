'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTReview.belongsTo(models.peerCTUser,{foreignKey:"user_id"}) // define association here
      peerCTReview.belongsTo(models.peerCTMentor,{foreignKey:"mentor_id"})
    }
  }
  peerCTReview.init({
    user_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peerCTReview',
  });
  return peerCTReview;
};