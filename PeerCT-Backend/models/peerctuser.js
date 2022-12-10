'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class peerCTUser extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            peerCTUser.belongsTo(models.peerCTUserCollege, {
                foreignKey: 'college_id',
            });
            peerCTUser.hasMany(models.peerCTOrder, { foreignKey: "user_id" });
            peerCTUser.hasMany(models.peerCTAddress, { foreignKey: "user_id" });
            peerCTUser.hasOne(models.peerCTService,{foreignKey:"user_id"});
            peerCTUser.hasOne(models.peerCTMentor,{foreignKey:"user_id"});
            peerCTUser.hasOne(models.peerCTBlogs,{foreignKey:"user_id"});
            peerCTUser.hasMany(models.peerCTChatRoom, { foreignKey: "user1", as: 'first' });
            peerCTUser.hasMany(models.peerCTChatRoom, { foreignKey: "user2", as: 'second' });
            peerCTUser.hasMany(models.peerCTChatStore, { foreignKey: "user" });
            peerCTUser.hasMany(models.peerCTGroupSessionOrder, { foreignKey: "user_id" });
            peerCTUser.hasMany(models.peerCTOneToOneSessionOrder,{foreignKey:"user_id"});
            peerCTUser.hasMany(models.peerCTReview,{foreignKey:"user_id"});
            peerCTUser.hasMany(models.peerCTSocialMediaLink,{foreignKey:"user_id"});
            peerCTUser.hasMany(models.peerCTMentorNetwork,{foreignKey:"user1",as:"u1"});
            peerCTUser.hasMany(models.peerCTMentorNetwork,{foreignKey:"user2",as:"u2"});

        }
    }
    peerCTUser.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        contact: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        address: DataTypes.TEXT,
        user_id: DataTypes.STRING,
        college_id: DataTypes.STRING,
        type: DataTypes.STRING,
        grad_year: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'peerCTUser',
    });
    return peerCTUser;
};
