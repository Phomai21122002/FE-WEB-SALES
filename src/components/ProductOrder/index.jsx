import { memo } from 'react';
import { Link } from 'react-router-dom';

import routes from '~/config/routes';
import imgHeader01 from '~/assets/images/imgHeader01.jpg';

function ProductOrder({ product }) {
    return (
        <>
            <Link to={routes.home} className="flex items-center flex-grow space-x-4 w-[20%]">
                <img src={imgHeader01} alt="Sản phẩm" className="w-16 h-16 object-cover rounded" />
                <div className="text-sm font-medium">
                    Tên sản phẩm {product.id + 1} Tên sản phẩm {product.id + 1}
                    Tên sản phẩm {product.id + 1}Tên sản phẩm {product.id + 1}Tên sản phẩm {product.id + 1}
                    Tên sản phẩm {product.id + 1}
                </div>
            </Link>
            <div className="w-32 text-center text-black-500 text-sm font-medium">100.000đ 100.000đ100.000đ</div>
            <div className="w-32 flex justify-center text-black-500 text-sm font-medium">{product.id}</div>
            <div className="w-32 text-center text-sm font-medium">100.000đ 100.000đ 100.000đ</div>
        </>
    );
}

export default memo(ProductOrder);
