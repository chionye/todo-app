const todo = require("../controllers/todo.controller.js");

var router = require("express").Router();

router.post("/", todo.create);

router.get("/", todo.findAll);

router.get("/:id", todo.findOne);

router.put("/:id", todo.update);

router.delete("/:id", todo.delete);

module.exports = router;