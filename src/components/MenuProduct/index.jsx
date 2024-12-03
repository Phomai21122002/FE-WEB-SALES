import { Products } from './Constains/index';
import { useState } from 'react';
import ButtonAddToCard from '../ButtonAddToCard';
import QuantitySelector from '../QuantitySelector';

function MenuProduct() {
    const [products, setProducts] = useState(Products);

    const addToCart = (productId, quantity) => {
        console.log(`Thêm sản phẩm ${productId} với số lượng ${quantity} vào giỏ hàng`);
    };

    const updateQuantity = (id, newQuantity) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => (product.id === id ? { ...product, quantity: newQuantity } : product)),
        );
    };

    return (
        <div className="py-4">
            <div className="flex text-xl font-semibold mb-4">Tên Category</div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-5 gap-2 transition-all duration-500 p-1">
                        {products.map((product) => (
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
                                        <ButtonAddToCard
                                            onAdd={addToCart}
                                            product={product}
                                            quantity={product?.quantity}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuProduct;
