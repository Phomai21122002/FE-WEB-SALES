import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import routes from '~/config/routes';
import { useStorage } from '~/Contexts';
import { role } from '~/pages/Login/constants/logo';

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const { setUserData, setIsLoggedIn } = useStorage();
    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            decodedToken.role = decodedToken[role];
            delete decodedToken[role];
            setUserData(decodedToken);
            setIsLoggedIn(true);
            console.log(decodedToken);
            if (!decodedToken || decodedToken.role !== 'Admin') {
                navigate(routes.login);
            }
        } else {
            navigate(routes.login);
        }
    }, [setIsLoggedIn, setUserData]);

    return (
        <div>
            <div>Admin Layout</div>
            {children}
        </div>
    );
}
export default AdminLayout;
