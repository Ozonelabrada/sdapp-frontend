import axios from "axios";

const options = {
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}
const api = axios.create(options)

export default api