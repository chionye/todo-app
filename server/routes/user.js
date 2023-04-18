const user = require("../controllers/user.js");

var router = require("express").Router();

router.post("/register", user.register);

router.post("/login", user.login);

module.exports = router;