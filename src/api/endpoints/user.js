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
<<<<<<< HEAD

export const findUser = async (id) => {
    try {
        const res = await api.get(`/user/find/${id}`);
=======
export const updateUser = async (data) => {
    try {
        const res = await api.patch(`/user/update/${data.id}`,data);
>>>>>>> 4446e3a62fc6237998bb76ce70292bab0f0a5115
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}