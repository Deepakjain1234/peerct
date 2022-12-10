'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn("peerCTMentors","github_id")
     await queryInterface.removeColumn("peerCTMentors","insta_id")
     await queryInterface.removeColumn("peerCTMentors","linkedin_id")
     await queryInterface.removeColumn("peerCTMentors","codechef")
     await queryInterface.removeColumn("peerCTMentors","codeforces")
     await queryInterface.removeColumn("peerCTMentors","leetcode")
  }
};