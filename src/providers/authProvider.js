import axios from "axios";

export default {
  login: ({ username, password }) =>
    axios
      .post("http://localhost:3000/admin/users/sign-in", { username, password })
      .then((r) => {
        localStorage.setItem("adminToken", r.data.token);
      })
      .catch(() => {
        throw new Error("Invalid data");
      }),

  logout: () =>
    axios
      .post("http://localhost:3000/admin/users/sign-out")
      .then(() => localStorage.removeItem("adminToken")),

  checkError: ({ status }) => {
    if (status === 403) {
      localStorage.removeItem("adminToken");

      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("adminToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.resolve(),
};
