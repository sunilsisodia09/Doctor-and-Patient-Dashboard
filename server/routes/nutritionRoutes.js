const express = require("express");

const {
  getNutrition,
} = require("../controllers/nutritionController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getNutrition);

module.exports = router;