/* eslint-disable no-param-reassign */
import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("adminToken");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:3001/api/v1/admin",
  httpClient
);

export default dataProvider;
