import toast from "react-hot-toast";
import api from "..";
import { findError } from "../../utilities/errorCode";

//create login  function
export const loginUser = async (credentials) => {
  try {
    const res = await api.post(`/auth/login`, credentials);
    if (res.status > 199 && res.status < 300) return res.data;
    if (res.data.code) toast.error(findError(res.data.code));
    return null
  } catch (error) {
    let code = error.response.data.code;
    toast.error(code? findError(code) : error.response.data.message)   
  }
};

// create register function
export const registerUser = async (credentials) => {
  try {
    const res = await api.post(`/auth/register`, credentials);
    return res.status === 200 ? res.data : null;
  } catch (error) {
    console.error(error);
  }
};
