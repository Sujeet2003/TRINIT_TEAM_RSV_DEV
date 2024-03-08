import axios from "axios";
axios.defaults.withCredentials = true;
const BASE_URL = "http://localhost:5000";

export default axios.create({
  baseURL: BASE_URL,
});
