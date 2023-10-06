const express = require("express");
const { register } = require("module");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);

module.exports = router;
