const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");

const router = express.Router();

// routers

// login route
router.post("/login", loginController);

// register route

router.post("/register", registerController);

module.exports = router;
