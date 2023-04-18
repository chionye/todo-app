const user = require("../controllers/user.js");

var router = require("express").Router();

router.post("/", user.create);

router.get("/:id", user.findOne);

module.exports = router;