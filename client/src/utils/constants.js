export const API_BASE_URL =
  "http://localhost:5000/api";

export const USER_ROLES = {
  DOCTOR: "doctor",
  PATIENT: "patient",
};

export const APPOINTMENT_STATUS = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

export const HEALTH_STATUS = {
  GOOD: "Good",
  NORMAL: "Normal",
  CRITICAL: "Critical",
};

export const SIDEBAR_LINKS = {
  doctor: [
    {
      name: "Dashboard",
      path: "/doctor/dashboard",
    },
    {
      name: "Patients",
      path: "/doctor/patients",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
    },
    {
      name: "Reports",
      path: "/doctor/reports",
    },
    {
      name: "Analytics",
      path: "/doctor/analytics",
    },
  ],

  patient: [
    {
      name: "Dashboard",
      path: "/patient/dashboard",
    },
    {
      name: "Medications",
      path: "/patient/medications",
    },
    {
      name: "Nutrition",
      path: "/patient/nutrition",
    },
    {
      name: "Vitals",
      path: "/patient/vitals",
    },
    {
      name: "Appointments",
      path: "/patient/appointments",
    },
    {
      name: "Profile",
      path: "/patient/profile",
    },
  ],
};