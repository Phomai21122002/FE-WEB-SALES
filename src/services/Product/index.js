import request from '../request';

export const GetProducts = async ({ Name, SortBy, isDecsending = false, PageNumber = 1, PageSize = 10 } = {}) => {
    try {
        const res = await request.get('/Products/list', {
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

export const GetProductBySlug = async ({ slug }) => {
    try {
        const res = await request.get(`/Products/slug/${slug}`, {
            params: {
                slug,
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};
