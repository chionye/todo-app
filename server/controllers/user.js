/** @format */

const { user, todo } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

exports.register = async (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const data = {
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  };

  user
    .create(data)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.login = (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  
  user
    .findOne({
      include: todo,
      where: {
        email: email,
      },
    })
    .then(async (response) => {
      if (response) {
        const values = response.dataValues;
        const comparePass = await bcrypt.compare(pass, values.password);
        if (comparePass) {
          let token = jwt.sign({ id: values.id }, config.secret, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });
          res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
          });
          res.status(201).send(values);
        } else {
          return res.status(401).send("Authentication failed");
        }
      } else {
        res.status(404).send({
          message: "Record not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
