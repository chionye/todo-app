/** @format */

const sq = require("./index.js");
const { DataTypes } = require("sequelize");

const Todo = sq.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

Todo.sync().then(() => {
  console.log("Todo Model synced");
});

module.exports = Todo;
