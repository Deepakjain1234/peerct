'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTGroupSessionOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTGroupSessionOrder.belongsTo(models.peerCTUser,{foreignKey:"user_id"}) // define association here
      peerCTGroupSessionOrder.belongsTo(models.peerCTGroupSession,{foreignKey:"group_session_id"})
    }
  }
  peerCTGroupSessionOrder.init({
    group_session_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    cancelled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'peerCTGroupSessionOrder',
  });
  return peerCTGroupSessionOrder;
};