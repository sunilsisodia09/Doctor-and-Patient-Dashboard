const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },

    medicineName: String,

    dosage: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medication", medicationSchema);