/* eslint-disable no-param-reassign */
import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import API_URL from "../config/constants";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("adminToken");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(API_URL, httpClient);

export default dataProvider;
