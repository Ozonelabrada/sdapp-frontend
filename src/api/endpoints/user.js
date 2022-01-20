import api from "..";

//create login  function
export const getMe = async () => {
    try {
        const res = await api.get(`/user/me`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const findAllUser = async () => {
    try {
        const res = await api.get(`/user/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findUser = async (id) => {
    try {
        const res = await api.get(`/user/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}