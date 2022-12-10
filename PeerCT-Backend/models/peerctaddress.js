'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peerCTAddress.belongsTo(models.peerCTUser,
        {
          foreignKey: "user_id"
        })

    }
  }
  peerCTAddress.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTAddress',
  });
  return peerCTAddress;
};