'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class peerCTOneToOneSessionOrder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            peerCTOneToOneSessionOrder.belongsTo(models.peerCTUser, { foreignKey: "user_id" }) // define association here
            peerCTOneToOneSessionOrder.belongsTo(models.peerCTMentor, { foreignKey: "mentor_id" })
            peerCTOneToOneSessionOrder.belongsTo(models.peerCTMentorService, { foreignKey: "service_id" })
        }
    }
    peerCTOneToOneSessionOrder.init({
        user_id: DataTypes.INTEGER,
        mentor_id: DataTypes.INTEGER,
        service_id: DataTypes.INTEGER,
        duration: DataTypes.INTEGER,
        session_date: DataTypes.DATE,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        price: DataTypes.INTEGER,
        cancelled: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'peerCTOneToOneSessionOrder',
    });
    return peerCTOneToOneSessionOrder;
};