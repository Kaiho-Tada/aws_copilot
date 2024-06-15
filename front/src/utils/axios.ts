// import axios from "axios";

// export const axiosInstance = axios.create();
// const REACT_APP_API_DOMEIN = "http://localhost:3000";
// axiosInstance.defaults.baseURL = REACT_APP_API_DOMEIN;
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    // baseURL: "http://localhost:3001/api/v1",
    // baseURL: "http://localhost:80/api/v1",
    // baseURL: "http://localhost:80",
    baseURL: "https://api.ecstada.com",
  }),
  options
);

export default client;
