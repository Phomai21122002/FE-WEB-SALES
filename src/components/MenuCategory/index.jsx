import { useState } from 'react';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

import { products } from './Constains/index';

function MenuCategory() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 8;

    const hasNext = currentIndex + itemsToShow < products.length;
    const hasPrev = currentIndex > 0;

    const nextProduct = () => {
        if (hasNext) {
            setCurrentIndex((prevIndex) => prevIndex + itemsToShow);
        }
    };

    const prevProduct = () => {
        if (hasPrev) {
            setCurrentIndex((prevIndex) => prevIndex - itemsToShow);
        }
    };

    return (
        <div className="py-4">
            <div className="flex text-xl font-semibold mb-4">Nhóm hàng thường mua</div>
            <div className="relative">
                {hasPrev && (
                    <button
                        onClick={prevProduct}
                        className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full hover:outline-none hover:ring-2 hover:ring-blue-500 transition-all z-[10]"
                    >
                        <ArrowBack />
                    </button>
                )}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-8 gap-4 transition-all duration-500 p-1">
                        {products.slice(currentIndex, currentIndex + itemsToShow).map((product) => (
                            <div key={product.id}>
                                <div className="relative w-full h-[100px] overflow-hidden rounded-[100%]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-center mt-2 text-sm font-semibold">{product.name}</h3>
                                <p className="text-center text-[12px] text-gray-600">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {hasNext && (
                    <button
                        onClick={nextProduct}
                        className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full hover:outline-none hover:ring-2 hover:ring-blue-500 transition-all z-[10]"
                    >
                        <ArrowForward />
                    </button>
                )}
            </div>
        </div>
    );
}

export default MenuCategory;
