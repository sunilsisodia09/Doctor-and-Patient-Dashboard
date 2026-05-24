import API from "./axios";

/* GET APPOINTMENTS */

export const getAppointments =
  async () => {
    return await API.get(
      "/appointments"
    );
  };

/* CREATE APPOINTMENT */

export const createAppointment =
  async (data) => {
    return await API.post(
      "/appointments",
      data
    );
  };

/* DELETE APPOINTMENT */

export const deleteAppointment =
  async (id) => {
    return await API.delete(
      `/appointments/${id}`
    );
  };