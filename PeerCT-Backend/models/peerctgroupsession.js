'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class peerCTGroupSession extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            peerCTGroupSession.belongsTo(models.peerCTMentor, { foreignKey: "mentor_id" })
            peerCTGroupSession.hasMany(models.peerCTGroupSessionOrder, { foreignKey: "group_session_id" })
        }
    }
    peerCTGroupSession.init({
        topic: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        start_time: DataTypes.DATE,
        end_time: DataTypes.DATE,
        price: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        date: DataTypes.STRING,
        attendance_limit: DataTypes.INTEGER,
        currently_registered: DataTypes.INTEGER,
        mentor_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'peerCTGroupSession',
    });
    return peerCTGroupSession;
};