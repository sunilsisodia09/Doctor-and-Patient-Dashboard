import API from "./axios";

/* GET PATIENT PROFILE */

export const getPatientProfile =
  async () => {
    return await API.get(
      "/patient/profile"
    );
  };

/* UPDATE PROFILE */

export const updatePatientProfile =
  async (data) => {
    return await API.put(
      "/patient/profile",
      data
    );
  };

/* GET HEALTH STATUS */

export const getHealthStatus =
  async () => {
    return await API.get(
      "/patient/health-status"
    );
  };