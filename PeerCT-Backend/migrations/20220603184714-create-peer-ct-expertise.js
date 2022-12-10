'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peerCTExpertises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"peerCTMentors",
          key:"id",
          as:"mentor_id"
        }
      },
      expertise: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('peerCTExpertises');
  }
};