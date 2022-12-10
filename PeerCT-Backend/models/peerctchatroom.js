'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class peerCTChatRoom extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            peerCTChatRoom.belongsTo(models.peerCTUser, {
                foreignKey: 'user1',
                as: 'first'
            })
            peerCTChatRoom.belongsTo(models.peerCTUser, {
                foreignKey: 'user2',
                as: 'second'
            })
        }

    }
    peerCTChatRoom.init({
        roomID: DataTypes.TEXT,
        user1: DataTypes.INTEGER,
        user2: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'peerCTChatRoom',
    });
    return peerCTChatRoom;
};