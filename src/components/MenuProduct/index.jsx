import { useEffect, useState } from 'react';
import Product from '../Product';
import { GetProducts } from '~/services/Product';
import { updatedProducts } from './Constains';

function MenuProduct({ title }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const res = await GetProducts();
                const resultProducts = updatedProducts(res);
                setProducts(resultProducts);
            } catch (err) {
                console.error('Error fetching product data: ', err);
            }
        };
        getAllProduct();
    }, []);

    const addToCart = (productId, quantity) => {
        console.log(`Thêm sản phẩm ${productId} với số lượng ${quantity} vào giỏ hàng`);
    };

    const updateQuantity = (id, newQuantity) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.product.id === id
                    ? { ...product, product: { ...product.product, count: newQuantity } }
                    : product,
            ),
        );
    };

    return (
        <div className="py-4">
            <div className="flex text-xl text-gray-500 font-medium mb-4 uppercase">{title}</div>
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-5 gap-2 transition-all duration-500 p-1">
                        {products?.map((product) => (
                            <Product
                                key={product.product.id}
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
