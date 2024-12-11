import { useState } from 'react';
import BackgroundCart from '~/components/BackgroundCart';
import MenuProduct from '~/components/MenuProduct';
import { Products } from '~/components/MenuProduct/Constains';
import ProductCart from '~/components/ProductCart';

function Cart() {
    const [products, setProducts] = useState(Products);

    const updateQuantity = (id, newQuantity) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => (product.id === id ? { ...product, quantity: newQuantity } : product)),
        );
    };
    return (
        <div className="max-w-[1100px] mx-auto py-8 mt-[64px]">
            <BackgroundCart className={'items-center'}>
                <input type="checkbox" className="w-4 h-4 mr-4 cursor-pointer" title="Chọn tất cả" />
                <div className="flex-grow text-sm text-gray-900 font-medium">Sản phẩm</div>
                <div className="w-32 text-center text-sm text-gray-500 font-medium">Đơn giá</div>
                <div className="w-32 text-center text-sm text-gray-500 font-medium">Số lượng</div>
                <div className="w-32 text-center text-sm text-gray-500 font-medium">Số tiền</div>
                <div className="w-32 text-center text-sm text-gray-500 font-medium">Thao tác</div>
            </BackgroundCart>
            <div className="flex flex-col items-center bg-white">
                <BackgroundCart className="w-full items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                        <span className="text-[16px] font-medium">Loại sản phẩm</span>
                    </div>
                </BackgroundCart>
                {products.map((item, index) => (
                    <BackgroundCart key={index} className="w-full items-center">
                        <ProductCart product={item} onUpdateQuantity={updateQuantity} />
                    </BackgroundCart>
                ))}
            </div>
            <BackgroundCart className="w-full items-center justify-between mt-8 mb-12">
                <div className="flex items-center space-x-4">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <span className="text-[16px] font-medium">Chọn tất cả (2 sản phẩm)</span>
                    <button className="text-red-500 text-[16px] font-medium hover:underline">Xóa tất cả</button>
                </div>
                <div className="flex items-center text-[16px] font-medium">
                    <div className="flex items-center justify-center mr-4">
                        Tổng thanh toán (<span>0</span> sản phẩm): <span className="text-red-500">200.000đ</span>
                    </div>
                    <button className="px-8 py-2 bg-yellow-400 text-white text-sm font-bold rounded hover:bg-yellow-500">
                        Mua hàng
                    </button>
                </div>
            </BackgroundCart>

            <MenuProduct title={'Có thể bạn cũng thích'} />
        </div>
    );
}

export default Cart;
