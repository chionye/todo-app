const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const port = process.env.PORT || 8080;

const db = require("./models");
const todo = require("./routes/todo");
const user = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.sequelize.sync().then(() => {
  console.log("db has been re sync");
});

app.use('/todo', todo);
app.use('/user', user);

app.listen(port, () => console.log(`listening on port: ${port}`));