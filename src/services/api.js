import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users",
});

api.interceptors.request.use(async (config) => {
  const tokenUrl = window.location.href.split("?code=");
  const token = tokenUrl[1];

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
