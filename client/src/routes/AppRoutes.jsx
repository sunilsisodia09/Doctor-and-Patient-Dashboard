import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";

/* AUTH PAGES */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* DOCTOR PAGES */
import DoctorDashboard from "../pages/doctor/Dashboard";
import Patients from "../pages/doctor/Patients";
import DoctorAppointments from "../pages/doctor/Appointments";
import Reports from "../pages/doctor/Reports";
import Analytics from "../pages/doctor/Analytics";

/* PATIENT PAGES */
import PatientDashboard from "../pages/patient/Dashboard";
import Medications from "../pages/patient/Medications";
import Nutrition from "../pages/patient/Nutrition";
import Vitals from "../pages/patient/Vitals";
import PatientAppointments from "../pages/patient/Appointments";
import Profile from "../pages/patient/Profile";

/* PROTECTED ROUTE */
import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= DOCTOR ROUTES ================= */}

        {/* FIX: /doctor redirect to dashboard */}
        <Route
          path="/doctor"
          element={<Navigate to="/doctor/dashboard" replace />}
        />

        <Route
          path="/doctor/dashboard"
          element={
            <ProtectedRoute role="doctor">
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/patients"
          element={
            <ProtectedRoute role="doctor">
              <Patients />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/appointments"
          element={
            <ProtectedRoute role="doctor">
              <DoctorAppointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/reports"
          element={
            <ProtectedRoute role="doctor">
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/analytics"
          element={
            <ProtectedRoute role="doctor">
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* ================= PATIENT ROUTES ================= */}

        {/* FIX: /patient redirect */}
        <Route
          path="/patient"
          element={<Navigate to="/patient/dashboard" replace />}
        />

        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute role="patient">
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/medications"
          element={
            <ProtectedRoute role="patient">
              <Medications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/nutrition"
          element={
            <ProtectedRoute role="patient">
              <Nutrition />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/vitals"
          element={
            <ProtectedRoute role="patient">
              <Vitals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/appointments"
          element={
            <ProtectedRoute role="patient">
              <PatientAppointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/profile"
          element={
            <ProtectedRoute role="patient">
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;