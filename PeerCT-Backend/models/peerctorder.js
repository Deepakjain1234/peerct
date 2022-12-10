'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTOrder.belongsTo(models.peerCTUser, { foreignKey: "user_id" });
      peerCTOrder.belongsTo(models.peerCTProduct, { foreignKey: "product_id" });

    }
  }
  peerCTOrder.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    sold: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peerCTOrder',
  });
  return peerCTOrder;
};