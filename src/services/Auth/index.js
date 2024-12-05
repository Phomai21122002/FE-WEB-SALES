import request from '../request';

export const SignIn = async (username, password) => {
    try {
        const res = await request.post('/account/login', {
            username: username,
            password: password,
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};
