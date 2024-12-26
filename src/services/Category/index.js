import request from '../request';

export const GetCategories = async () => {
    try {
        const res = await request.get('/Categories');
        return res.data;
    } catch (error) {
        throw error;
    }
};
