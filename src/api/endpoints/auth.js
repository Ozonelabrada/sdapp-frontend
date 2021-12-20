import api from "..";

//create login  function
export const loginUser = async (credentials) => {
    try {
        const res = await api.post(`/auth/login`, credentials);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

// create register function
export const registerUser = async (credentials) => {
    try {
        const res = await api.post(`/auth/register`, credentials);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}