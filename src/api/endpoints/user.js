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

export const createUser = async (data) => {
    try {
        const res = await api.post(`/user/store`, data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const updateUser = async (data) => {
    try {
        const res = await api.patch(`/user/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const deleteUser = async (id) => {
    try {
        const res = await api.delete(`/user/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const deleteBulkUser = async (data) => {
    try {
        const res = await api.patch(`/user/delete-bulk`, data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const activateUser = async (data) => {
    try {
        const res = await api.patch(`/user/set-active/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}