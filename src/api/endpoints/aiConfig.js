import api from "..";

//create login  function
export const getMyAi = async () => {
    try {
        const res = await api.get(`/ai-config/findOwn`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}

export const storeAi = async (data) => {
    try {
        const res = await api.post(`/ai-config/store`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const findAllAi = async () => {
    try {
        const res = await api.get(`/ai-config/find`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const updateAi = async (data) => {
    try {
        const res = await api.patch(`/ai-config/update/${data.id}`,data);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}
export const deleteAi = async (id) => {
    try {
        const res = await api.delete(`/ai-config/delete/${id}`);
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}