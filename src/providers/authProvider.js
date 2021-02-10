/* eslint-disable prefer-promise-reject-errors */
import axios from "axios";
import API_URL from "../config/constants";

const authProvider = {
  login: ({ username, password }) =>
    axios
      .post(`${API_URL}/sign-in`, { username, password })
      .then((r) => {
        localStorage.setItem("adminToken", r.data);
      })
      .catch(() => {
        throw new Error("Invalid data");
      }),
  logout: () =>
    axios
      .post(`${API_URL}/sign-out`)
      .then(() => localStorage.removeItem("adminToken")),
  checkError: ({ status }) => {
    if (status === 403 || status === 401) {
      localStorage.removeItem("adminToken");

      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("adminToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
