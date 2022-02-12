import axios from "axios";
import toast from "react-hot-toast";
import { findError } from "../utilities/errorCode";

const options = {
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}
const api = axios.create(options)

// create function to set headers
export const setHeaders = (key, value) => {
    api.defaults.headers.common[key] = value
}

// create axios request interceptor
api.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// create axois response interceptor
api.interceptors.response.use(
    response => {
        // Do something with response data
        return response

    },
    error => {
        // Do something with response error
        let code = error.response.data.code;
        toast.error(code ? findError(code) : error.response.data.message)
        return Promise.reject(error);
    }
);



export default api
