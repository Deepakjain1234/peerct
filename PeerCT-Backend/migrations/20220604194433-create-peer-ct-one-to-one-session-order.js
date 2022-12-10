'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('peerCTOneToOneSessionOrders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTUsers",
                    key: "id",
                    as: "user_id"
                }
            },
            mentor_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTMentors",
                    key: "id",
                    as: "mentor_id"
                }
            },
            service_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTMentorServices",
                    key: "id",
                    as: "service_id"

                },
            },
            duration: {
                type: Sequelize.INTEGER
            },
            start_time: {
                type: Sequelize.DATE
            },
            session_date: {
                type: Sequelize.DATE
            },
            end_time: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('peerCTOneToOneSessionOrders');
    }
};