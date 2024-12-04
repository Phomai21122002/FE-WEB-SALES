import { memo } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import routes from '~/config/routes';
import QuantitySelector from '~/components/QuantitySelector';
import imgHeader01 from '~/assets/images/imgHeader01.jpg';

function ProductCart({ product }) {
    return (
        <>
            <input type="checkbox" className="w-4 h-4 mr-4 cursor-pointer" />
            <Link to={routes.home} className="flex items-center flex-grow space-x-4 w-[20%]">
                <img src={imgHeader01} alt="Sản phẩm" className="w-16 h-16 object-cover rounded" />
                <div className="text-sm font-medium">
                    Tên sản phẩm {product.id + 1} Tên sản phẩm {product.id + 1}
                    Tên sản phẩm {product.id + 1}Tên sản phẩm {product.id + 1}Tên sản phẩm {product.id + 1}
                    Tên sản phẩm {product.id + 1}
                </div>
            </Link>
            <div className="w-32 text-center text-black-500 text-sm font-medium">100.000đ 100.000đ100.000đ</div>
            <div className="w-32 flex justify-center">
                <QuantitySelector product={product} quantity={product.id} />
            </div>
            <div className="w-32 text-center text-sm font-medium">100.000đ 100.000đ 100.000đ</div>
            <div className="w-32 text-center font-medium leading-none">
                <button className="text-black-900 text-sm hover:text-red-500">Xóa</button>
                <div className="flex items-center text-red-500 cursor-pointer">
                    <span className="text-[12px] leading-none">Tìm sản phẩm tương tự</span>
                    <ArrowDropDownIcon style={{ fontSize: 20 }} />
                </div>
            </div>
        </>
    );
}

export default memo(ProductCart);
