import request from '../request';

export const GetUsers = async ({ Name, SortBy, isDecsending = false, PageNumber = 1, PageSize = 10 } = {}) => {
    try {
        const res = await request.get(`/User/users`, {
            params: {
                Name,
                SortBy,
                isDecsending,
                PageNumber,
                PageSize,
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const GetUserById = async (id) => {
    try {
        const res = await request.get(`/User/${id}`, {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const UpdateUserById = async (id, data) => {
    try {
        const res = await request.put(`/User/${id}`, data);
        return res;
    } catch (error) {
        throw error;
    }
};

export const DeleteUserById = async (id) => {
    try {
        const res = await request.delete(`/User/${id}`, {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const GetProfile = async () => {
    try {
        const res = await request.get(`/User/profile`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const ChangePassword = async (id, data) => {
    console.log(id, data);
    const res = await request.patch(`/User/${id}`, data);
    return res.data;
};
