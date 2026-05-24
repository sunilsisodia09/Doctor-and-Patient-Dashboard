const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },

    calories: Number,

    protein: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nutrition", nutritionSchema);