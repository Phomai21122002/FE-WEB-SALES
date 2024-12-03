import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logoSale from '~/assets/images/Logo-sales.png';
import { menuHeader } from './Constains';

const Header = () => {
    return (
        <div className="flex items-center justify-center bg-white shadow-md">
            <div className="flex items-center justify-between max-w-[1080px] w-full px-6 py-1">
                <div className="flex items-center space-x-6">
                    <img src={logoSale} alt="Logo" className="w-14 h-14 object-contain" />
                    <div className="flex items-center space-x-4 font-bold text-[12px] uppercase">
                        {menuHeader.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-1 hover:text-yellow-400 cursor-pointer"
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-6 text-lg font-bold text-[12px] uppercase">
                    <div className="flex items-center border border-gray-300 rounded-md pl-2 hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition duration-200">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="ml-2 w-full outline-none text-sm text-gray-700"
                        />
                        <div className="rounded-tr-md rounded-br-md py-1 px-2 hover:bg-yellow-200 transition duration-200 cursor-pointer">
                            <SearchOutlinedIcon sx={{ fontSize: '20px' }} className="text-gray-500" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
                        <ShoppingCartOutlinedIcon sx={{ fontSize: '16px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
