const mongoose = require("mongoose");

const vitalSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },

    heartRate: Number,

    bloodPressure: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vital", vitalSchema);