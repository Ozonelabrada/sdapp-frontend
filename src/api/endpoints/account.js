import api from "..";

export const accountMe = async () => {
    try {
        const res = await api.get(`/account/me`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const storeAccount = async (data) => {
    try {
        const res = await api.post(`/account/store`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const findAccount = async (id) => {
    try {
        const res = await api.get(`/account/find/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const updateAccount = async (data) => {
    try {
        const res = await api.patch(`/account/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const deleteAccount = async (id) => {
    try {
        const res = await api.delete(`/account/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}