import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import routes from '../../config/routes';
import Cookies from 'js-cookie';

export const RequiredAuth = () => {
    const navigate = useNavigate();
    const token = Cookies.get('authToken');

    useEffect(() => {
        if (!!token) {
            console.log(token);
        } else {
            navigate(routes.login);
        }
        // eslint-disable-next-line
    }, [token]);

    return <Outlet />;
};
