import axios from "axios";

const axiosWithConfig = axios.create({
  timeout: 10000
});

// 请求拦截器
axiosWithConfig.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 响应拦截器
axiosWithConfig.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Promise.reject(error);
  }
);

export default axiosWithConfig;
