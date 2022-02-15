// export const totalUsers = await prisma.user.count();

// export const usersTotal = async (id) => {
//     const totalUsers = await prisma.user.count();
// }
import api from "..";

export const totalUser = async (id) => {
    try {
        const res = await api.user.count();
        return res.status === 200 ? res.data : null;
    } catch (error) { console.error(error) }
}