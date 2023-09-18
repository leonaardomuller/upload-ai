import axios from "axios";

const BASE_URL = "http://localhost";
const PORT = "3333";

export const api = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
});
