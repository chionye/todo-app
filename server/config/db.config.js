require("dotenv").config();

module.exports = {
  host: process.end.APP_PORT,
  user: process.end.USER,
  pass: process.env.PASS,
  db: process.env.DB,
  dialect: process.env.DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};