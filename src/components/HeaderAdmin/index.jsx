import React from 'react';
import { Link } from 'react-router-dom';

import logoSale from '~/assets/images/Logo-sales.png';
import routes from '~/config/routes';
import AvatarUser from '../AvatarUser';

const HeaderAdmin = () => {
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

                <AvatarUser />
            </div>
        </div>
    );
};

export default HeaderAdmin;
