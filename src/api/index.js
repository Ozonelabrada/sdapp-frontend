import axios from "axios";

const options = {
    baseURL: process.env.API_BASEURL,
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

export default api
