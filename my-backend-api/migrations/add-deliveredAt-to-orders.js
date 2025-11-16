"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Orders", "deliveredAt", {
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn("Orders", "returnRequestedAt", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn("Orders", "returnRequestedAt");
    await queryInterface.removeColumn("Orders", "deliveredAt");
  },
};