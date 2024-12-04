import { Products } from './Constains/index';
import { useState } from 'react';
import Product from '../Product';

function MenuProduct({ title }) {
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
            <div className="flex text-xl text-gray-500 font-medium mb-4 uppercase">{title}</div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-5 gap-2 transition-all duration-500 p-1">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuProduct;
