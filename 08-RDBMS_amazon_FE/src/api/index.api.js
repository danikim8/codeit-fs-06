import axios from "axios";
import usersAPI from "./users.api";

const baseURL = "http://localhost:5555";
export const client = axios.create({ baseURL });

const api = {
  users: usersAPI,
};

export default api;
