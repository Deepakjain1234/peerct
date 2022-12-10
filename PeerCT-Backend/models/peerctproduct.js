'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTProduct.belongsTo(models.peerCTCategory,{foreignKey:"category_id"});
      peerCTProduct.belongsTo(models.peerCTUserCollege,{foreignKey:"college_id"});
      peerCTProduct.hasMany(models.peerCTOrder,{foreignKey:"product_id"});
    }
  }
  peerCTProduct.init({
    category_id: DataTypes.INTEGER,
    college_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image_1:DataTypes.TEXT,
    image_2:DataTypes.TEXT,
    image_3:DataTypes.TEXT,
    image_4:DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'peerCTProduct',
  });

  return peerCTProduct;
};