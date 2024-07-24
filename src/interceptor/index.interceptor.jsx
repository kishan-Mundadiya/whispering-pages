// src/axiosInstance.js
import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    console.log("--> response from interceptor <--", response.data);
    return response;
  },
  (error) => {
    // Handle response error
    // For example, handle unauthorized access
    if (error.response && error.response.status === 401) {
      // Redirect to login page or show an error message
      console.error("Unauthorized access - redirecting to login");
    }
    return Promise.reject(error);
  }
);

export default instance;
