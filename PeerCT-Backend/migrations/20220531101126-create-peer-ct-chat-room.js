'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('peerCTChatRooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roomID: {
                type: Sequelize.STRING,
                unique: true
            },
            user1: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTUsers",
                    key: "id",
                    as: "user1"
                }
            },
            user2: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTUsers",
                    key: "id",
                    as: "user2"
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
        await queryInterface.dropTable('peerCTChatRooms');
    }
};