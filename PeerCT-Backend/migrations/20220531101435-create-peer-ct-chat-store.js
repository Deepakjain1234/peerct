'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('peerCTChatStores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roomID: {
                type: Sequelize.STRING
            },
            message: {
                type: Sequelize.TEXT
            },
            user: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTUsers",
                    key: "id",
                    as: "user1"
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
        await queryInterface.dropTable('peerCTChatStores');
    }
};