'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peerCTSocialMediaLinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"peerCTUsers",
          key:"id",
          as:"user_id",
        }
      },
      linkedin: {
        type: Sequelize.TEXT
      },
      github: {
        type: Sequelize.TEXT
      },
      twitter: {
        type: Sequelize.TEXT
      },
      insta: {
        type: Sequelize.TEXT
      },
      behance: {
        type: Sequelize.TEXT
      },
      dribble: {
        type: Sequelize.TEXT
      },
      medium: {
        type: Sequelize.TEXT
      },
      youtube: {
        type: Sequelize.TEXT
      },
      codechef: {
        type: Sequelize.TEXT
      },
      codeforces: {
        type: Sequelize.TEXT
      },
      leetcode: {
        type: Sequelize.TEXT
      },
      topcoder: {
        type: Sequelize.TEXT
      },
      gfg: {
        type: Sequelize.TEXT
      },
      facebook: {
        type: Sequelize.TEXT
      },
      codepen: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('peerCTSocialMediaLinks');
  }
};
