const express = require("express");

const {
  getDoctorDashboard,
} = require("../controllers/doctorController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", protect, getDoctorDashboard);

module.exports = router;