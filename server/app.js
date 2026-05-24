const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const medicationRoutes = require("./routes/medicationRoutes");
const nutritionRoutes = require("./routes/nutritionRoutes");
const vitalsRoutes = require("./routes/vitalsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/medications", medicationRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/vitals", vitalsRoutes);

app.get("/", (req, res) => {
  res.send("Healthcare API Running");
});

module.exports = app;