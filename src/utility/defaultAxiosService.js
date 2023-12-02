import axios from "axios";
import { API_BASE_URL } from "../configs/secrets";

import { setMiddleWares } from "./serviceUtils";

// axios.defaults.withCredentials = true
// Add a request interceptor
const createConfig = {
  BASE_URL: API_BASE_URL,
};

const axiosServices = axios.create(createConfig);

const _getAxiosService = (contentType = "json") => {
  // console.log(contentType);
  setMiddleWares(axiosServices, contentType, API_BASE_URL);
  return axiosServices;
};

_getAxiosService();

export default axiosServices;

export const useAxiosService = _getAxiosService;
