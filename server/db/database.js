const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/arkdb", {
  dialect: "postgres",
});

module.exports = db;
