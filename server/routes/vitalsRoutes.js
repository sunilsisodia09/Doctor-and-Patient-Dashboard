const express = require("express");

const {
  getVitals,
} = require("../controllers/vitalsController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getVitals);

module.exports = router;