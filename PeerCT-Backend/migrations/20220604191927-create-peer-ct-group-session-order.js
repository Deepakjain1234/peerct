'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peerCTGroupSessionOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_session_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"peerCTGroupSessions",
          key:"id",
          as :"group_session_id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"peerCTUsers",
          key:"id",
          as :"user_id"
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      cancelled: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('peerCTGroupSessionOrders');
  }
};