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
export const updateUser = async (data) => {
    try {
        const res = await api.patch(`/user/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}