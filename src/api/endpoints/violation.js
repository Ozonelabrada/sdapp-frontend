// create violation function
import api from "..";

export const showViolations = async (credentials) => {
    try {
        const res = await api.get(`/violation/find`,'*' );
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}