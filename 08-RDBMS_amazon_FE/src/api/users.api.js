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

const usersAPI = {
  signUp,
};

export default usersAPI;
