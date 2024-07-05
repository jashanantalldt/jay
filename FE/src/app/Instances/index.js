
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3002",
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
});

// Request interceptor to add headers to every request
axiosInstance.interceptors.request.use(
    config => {
        // You can also add additional headers here if needed
        // config.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle responses globally if needed
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export const 
getRequest = async (url) => {
    const response = await axiosInstance.get(url);
    return response;
};

export const postRequest = async (url, data,options) => {
    const response = await axiosInstance.post(url, data,options);
    return response.data;
};

export const putRequest = async (url, data) => {
    const response = await axiosInstance.put(url, data);
    return response.data;
};

export const deleteRequest = async (url) => {
    const response = await axiosInstance.delete(url);
    return response.data;
};
