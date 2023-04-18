/** @format */

const sq = require("./index.js");
const { DataTypes } = require("sequelize");
const todo = require("./todo.model.js");

const User = sq.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

User.hasOne(todo);

User.sync().then(() => {
  console.log("User Model synced");
});

module.exports = User;
