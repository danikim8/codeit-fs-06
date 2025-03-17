import { client } from "./index.api";

const signUp = async (data) => {
  try {
    const response = await client.post("/users/sign-up", data);
    const result = response.data;

    return result;
  } catch (e) {
    console.error(e);
  }
};

const logIn = async (data) => {
  try {
    const response = await client.post("/users/log-in", data);
    const result = response.data;

    client.defaults.headers.Authorization = `Basic ${result}`;

    return result;
  } catch (e) {
    console.error(e);
  }
};

const getFavoriteProducts = async () => {
  try {
    const response = await client.get("/users/favorite-products");
    const result = response.data;

    return result;
  } catch (e) {
    console.error(e);
  }
};

const usersAPI = {
  signUp,
  logIn,
  getFavoriteProducts,
};

export default usersAPI;
