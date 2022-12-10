'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peerCTMentorNetworks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user1: {
        type: Sequelize.INTEGER,
        references:{
            model:"peerCTUsers",
            key:"id",
            as:"user1",
          }
      },
      user2: {
        type: Sequelize.INTEGER,
        references:{
            model:"peerCTUsers",
            key:"id",
            as:"user2",
          }
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
    await queryInterface.dropTable('peerCTMentorNetworks');
  }
};