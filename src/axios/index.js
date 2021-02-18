import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3007/api/",
  // baseURL: "https://selftesting.azurewebsites.net/api/",
  headers: { "Content-type": "application/json" },
});

// instance.defaults.headers.common["Authorization"] =
//   "Bearer " + sessionStorage.getItem("Token");

export default instance;
