/** @format */

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;

const app = express();

app.set(cors());
app.set(express.json());
app.set(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("this is a test");
});

app.listen(port, () => console.log(`listening on port: ${port}`));