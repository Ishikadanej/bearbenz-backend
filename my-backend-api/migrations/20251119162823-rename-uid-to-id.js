'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Users", "uid", "id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Users", "id", "uid");
  },
};

