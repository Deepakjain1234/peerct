'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('peerCTMentors',"approve",{type:Sequelize.BOOLEAN})
     await queryInterface.addColumn('peerCTMentors',"experience",{type:Sequelize.INTEGER})
     await queryInterface.addColumn('peerCTMentors',"image_url",{type:Sequelize.TEXT})
     await queryInterface.addColumn('peerCTMentors',"language",
     {type:Sequelize.STRING}
   )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
