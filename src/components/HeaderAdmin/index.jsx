import React from 'react';

import logoSale from '~/assets/images/Logo-sales.png';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { useStorage } from '~/Contexts';
import { Avatar } from '@mui/material';
import { stringAvatar } from '~/utils/color';

const HeaderAdmin = () => {
    const { userData } = useStorage();
    console.log(userData);
    return (
        <div className="flex items-center justify-center bg-white shadow-md">
            <div className="flex items-center justify-between max-w-[1080px] w-full px-6 py-1">
                <div className="flex items-center space-x-6">
                    <Link to={routes.home}>
                        <img src={logoSale} alt="Logo" className="w-14 h-14 object-contain cursor-pointer" />
                    </Link>
                    <div className="flex items-center font-bold text-[16px] uppercase">
                        <div className="flex items-center cursor-pointer">
                            <span>Bánh tráng phô mai</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-6 text-lg font-bold text-[12px] uppercase">
                    <div className="relative flex items-center justify-center mb-2">
                        <Avatar
                            {...stringAvatar(userData?.sub)}
                            alt={userData?.sub}
                            src={userData?.avatarUrl || ''}
                            sx={{ ...stringAvatar(userData?.sub)?.sx, width: 32, height: 32, marginRight: '8px' }}
                        />
                        <div className="flex items-center justify-center mr-1 font-bold text-[12px]">
                            {userData?.sub}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdmin;
