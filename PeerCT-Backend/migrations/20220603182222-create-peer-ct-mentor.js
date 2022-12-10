'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('peerCTMentors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            role: {
                type: Sequelize.STRING
            },
            company_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "peerCTCompanies",
                    key: "id",
                    as: "company_id"
                }
            },
            github_id: {
                type: Sequelize.TEXT
            },
            insta_id: {
                type: Sequelize.TEXT
            },
            linkedin_id: {
                type: Sequelize.TEXT
            },
            codechef: {
                type: Sequelize.STRING
            },
            codeforces: {
                type: Sequelize.STRING
            },
            leetcode: {
                type: Sequelize.STRING
            },
            bio: {
                type: Sequelize.TEXT
            },
            start_time: {
                type: Sequelize.STRING
            },
            end_time: {
                type: Sequelize.STRING
            },
            portfolio_website: {
                type: Sequelize.TEXT
            },
            user_id: {
                type: Sequelize.INTEGER,
                unique:true,
                references: {
                    model: "peerCTUsers",
                    key: "id",
                    as: "user_id"
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
        await queryInterface.dropTable('peerCTMentors');
    }
};