const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    specialization: String,

    experience: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);