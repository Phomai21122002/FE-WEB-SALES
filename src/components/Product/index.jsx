import { memo } from 'react';

import ButtonAddToCard from '../ButtonAddToCard';
import QuantitySelector from '../QuantitySelector';

function Product({ product, updateQuantity, addToCart }) {
    return (
        <div
            key={product.id}
            className="group bg-white pb-4 rounded-md shadow-md hover:outline-none hover:ring-2 hover:ring-blue-500 transition-all"
        >
            <div className="relative w-full h-[150px] overflow-hidden cursor-pointer rounded-tr-md rounded-tl-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                />
            </div>

            <div className="px-2">
                <h3 className="mt-2 text-[16px] font-semibold cursor-pointer">{product.name}</h3>
                <p className="text-sm text-gray-600 cursor-pointer">{product.description}</p>
                <p className="text-sm text-gray-600">giá tiền đ</p>

                <div className="flex items-center justify-between mt-2">
                    <QuantitySelector
                        product={product}
                        quantity={product?.quantity}
                        onUpdateQuantity={updateQuantity}
                    />
                    <ButtonAddToCard onAdd={addToCart} product={product} quantity={product?.quantity} />
                </div>
            </div>
        </div>
    );
}

export default memo(Product);
