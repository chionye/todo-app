/** @format */

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;
const todo = require("./routes/todo.routes");
const user = require("./routes/user.routes");

const app = express();

app.set(cors());
app.set(express.json());
app.set(express.urlencoded({ extended: true }));

app.get('/todo', todo);
app.get('/user', user);

app.listen(port, () => console.log(`listening on port: ${port}`));