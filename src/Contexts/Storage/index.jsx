import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import { role } from '~/pages/Login/constants/logo';

export const StorageContext = createContext();

function GlobalStates({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userData, setUserData] = useState({});

    const states = {
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
    };

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            decodedToken.role = decodedToken[role];
            delete decodedToken[role];
            setUserData(decodedToken);
            setIsLoggedIn(true);
        }
    }, []);

    return <StorageContext.Provider value={states}>{children}</StorageContext.Provider>;
}

export default GlobalStates;

export const useStorage = () => {
    const context = useContext(StorageContext);

    if (!context) {
        throw new Error('useEditCompanyContext must be used within a EditCompanyProvider');
    }

    return context;
};
