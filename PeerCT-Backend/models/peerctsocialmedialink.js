'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peerCTSocialMediaLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peerCTSocialMediaLink.belongsTo(models.peerCTUser,{foreignKey:"user_id"})
    }
  }
  peerCTSocialMediaLink.init({
    user_id: DataTypes.INTEGER,
    linkedin: DataTypes.TEXT,
    github: DataTypes.TEXT,
    twitter: DataTypes.TEXT,
    insta: DataTypes.TEXT,
    behance: DataTypes.TEXT,
    dribble: DataTypes.TEXT,
    medium: DataTypes.TEXT,
    youtube: DataTypes.TEXT,
    codechef: DataTypes.TEXT,
    codeforces: DataTypes.TEXT,
    leetcode: DataTypes.TEXT,
    topcoder: DataTypes.TEXT,
    gfg: DataTypes.TEXT,
    facebook: DataTypes.TEXT,
    codepen: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'peerCTSocialMediaLink',
  });
  return peerCTSocialMediaLink;
};
