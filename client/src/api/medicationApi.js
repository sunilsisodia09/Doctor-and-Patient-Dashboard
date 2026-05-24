import API from "./axios";

/* GET MEDICATIONS */

export const getMedications =
  async () => {
    return await API.get(
      "/medications"
    );
  };

/* ADD MEDICATION */

export const addMedication =
  async (data) => {
    return await API.post(
      "/medications",
      data
    );
  };