/** @format */

const { user } = require("../models");

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  user
    .create(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  const email = req.params.email;

  user
    .findOne({ where: { email: email } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Record not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving record",
      });
    });
};
