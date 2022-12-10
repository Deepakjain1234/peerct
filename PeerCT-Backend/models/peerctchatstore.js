'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class peerCTChatStore extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            peerCTChatStore.belongsTo(models.peerCTUser, {
                foreignKey: 'user'
            })
        }
    }
    peerCTChatStore.init({
        roomID: DataTypes.STRING,
        message: DataTypes.TEXT,
        user: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'peerCTChatStore',
    });
    return peerCTChatStore;
};