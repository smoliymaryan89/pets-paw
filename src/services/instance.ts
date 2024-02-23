import axios from "axios";

const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "x-api-key": VITE_API_KEY,
  },
});

export default instance;
