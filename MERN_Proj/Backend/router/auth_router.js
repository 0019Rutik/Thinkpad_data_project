const express = require("express");
const router = express.Router();
const auth_controller = require( "../controller/auth_controller");


router.route("/").get(auth_controller.Home);

// router.route("/sam").get(auth_controller.sam);

router.route("/createEmployee").post(auth_controller.createEmployee);

router.route("/getEmployee").get(auth_controller.getEmployee)

router.route("/update/:id").put(auth_controller.updateEmployee);

router.route("/delete/:id").delete(auth_controller.deleteEmployee);

router.route("/login").post(auth_controller.login)



//router.route("/EmployeeList").get(auth_controller.EmployeeList);
//router.route("/CreateEmployee).get(auth_controller.register).post(auth_controller.register);

// router.route("/login").get(auth_controller.Login);


module.exports = router;
