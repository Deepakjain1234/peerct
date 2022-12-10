'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('peerCTProducts',"image_1",{
      type:Sequelize.TEXT
    })
    await queryInterface.addColumn('peerCTProducts',"image_2",{
      type:Sequelize.TEXT
    })
    await queryInterface.addColumn('peerCTProducts',"image_3",{
      type:Sequelize.TEXT
    })
    await queryInterface.addColumn('peerCTProducts',"image_4",{
      type:Sequelize.TEXT
    })
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
