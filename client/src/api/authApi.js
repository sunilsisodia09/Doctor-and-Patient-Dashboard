import API from "./axios";

/* LOGIN */

export const loginUser = async (
  userData
) => {
  return await API.post(
    "/auth/login",
    userData
  );
};

/* REGISTER */

export const registerUser =
  async (userData) => {
    return await API.post(
      "/auth/register",
      userData
    );
  };

/* GET PROFILE */

export const getProfile =
  async () => {
    return await API.get(
      "/auth/profile"
    );
  };