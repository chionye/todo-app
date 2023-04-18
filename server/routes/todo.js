const todo = require("../controllers/todo.js");

var router = require("express").Router();

router.get("/", todo.findAll);

router.post("/", todo.create);

router.get("/:id", todo.findOne);

router.put("/:id", todo.update);

router.delete("/:id", todo.delete);

module.exports = router;