
const express = require("express");
const router = express.Router();
const {Home , register} = require("../controller/auth_controller");

// Define routes
router.route("/").get(Home);

router.route("/register").get(register).post(register);

router.route("/signin").post(register);


module.exports = router;

