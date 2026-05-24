import API from "./axios";

/* GET ALL PATIENTS */

export const getPatients =
  async () => {
    return await API.get(
      "/doctor/patients"
    );
  };

/* GET DASHBOARD */

export const getDoctorDashboard =
  async () => {
    return await API.get(
      "/doctor/dashboard"
    );
  };

/* GET REPORTS */

export const getReports =
  async () => {
    return await API.get(
      "/doctor/reports"
    );
  };

/* GET ANALYTICS */

export const getAnalytics =
  async () => {
    return await API.get(
      "/doctor/analytics"
    );
  };