const express = require("express");

const {
  getPatientDashboard,
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", protect, getPatientDashboard);

module.exports = router;