/** @format */

const todoModel = require("../models/todo.model");

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const todo = {
    todoId: req.body.id,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    time: req.body.time,
  };

  todoModel
    .create(todo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  const condition = id ? { todoId: id } : null;

  todoModel
    .findAll({ where: condition })
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
  const id = req.params.id;

  todoModel
    .findByPk(id)
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

exports.update = (req, res) => {
  const id = req.params.id;

  todoModel
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Update successful.",
        });
      } else {
        res.send({
          message: `Update failed, please try again later.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating record",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  todoModel
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Delete successful",
        });
      } else {
        res.send({
          message: `Delete failed, please try again later.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting record",
      });
    });
};
