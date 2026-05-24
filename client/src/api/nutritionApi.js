import API from "./axios";

/* GET NUTRITION DATA */

export const getNutrition =
  async () => {
    return await API.get(
      "/nutrition"
    );
  };

/* ADD NUTRITION */

export const addNutrition =
  async (data) => {
    return await API.post(
      "/nutrition",
      data
    );
  };