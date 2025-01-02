import request from '../request';

export const OrderProduct = async (data) => {
    try {
        console.log(data);
        const res = await request.post(`/Order`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const UpdateOrderProduct = async (orderId, data) => {
    try {
        const res = await request.patch(`/Order/${orderId}`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const GetOrderProduct = async ({ isPriceDecsending, Status, PageNumber, PageSize, StartDate, EndDate }) => {
    try {
        const res = await request.get(`/Order`, {
            params: {
                isPriceDecsending,
                Status,
                PageNumber,
                PageSize,
                StartDate,
                EndDate,
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};
