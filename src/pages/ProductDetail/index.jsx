import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@mui/material';

import Button from '~/components/Button';
import ImageSlider from '~/components/ImageSlider';
import imgHeader01 from '~/assets/images/imgHeader01.jpg';
import imgHeader02 from '~/assets/images/imgHeader02.jpg';
import CountNumber from '~/components/CountNumber';
import MenuProduct from '~/components/MenuProduct';

function ProductDetail() {
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState(
        {
            variantOptions: [
                { id: 1, price: '60000', name: 'Sốt me' },
                { id: 2, price: '50000', name: 'Sốt phômai' },
            ],
            productImage: [imgHeader01, imgHeader02, imgHeader02],
            name: 'Bánh tráng',
            description: 'Bánh tráng huế chất lượng ăn vào là ghiền',
            quantity: 1,
        } || {},
    );
    const [option, setOption] = useState({});

    const selectRef = useRef();

    const updateQuantity = (id, newQuantity) => {
        setProduct((prevProducts) => ({ ...prevProducts, quantity: newQuantity }));
    };

    const handleChangeOption = async (e) => {
        const idOption = e.target.value;
        const optionSelected = product.variantOptions.find((option) => option.id === Number(idOption));
        setOption(optionSelected);
    };

    useEffect(() => {
        // window.scrollTo(0, 0);
        setLoading(true);
        setLoading(false);
        setOption(product.variantOptions[0]);
        // getProductById(id)
        //     .then((res) => {
        //         setLoading(false);
        //         setProduct(res);
        //         setOption(res.variantOptions[0]);
        //         contentRef.current.innerHTML = res.htmlDomDescription;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, [id, product]);

    return (
        <div className="max-w-[1200px] mx-auto pt-32">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Left Section */}
                <div className="flex-1">
                    <div className="w-full max-w-md mx-auto">
                        {product.productImage?.length > 0 || (
                            <Skeleton variant="rectangular" animation="wave" width={370} height={370} />
                        )}
                        <ImageSlider images={product.productImage} />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 space-y-4">
                    {product.name && !loading ? (
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                    ) : (
                        <Skeleton variant="text" className="text-lg" />
                    )}

                    <div className="text-xl font-bold text-red-500">
                        {option.price && !loading ? (
                            <span>{`${Number(option.price).toLocaleString('vi-VN', {
                                currency: 'VND',
                            })}đ`}</span>
                        ) : (
                            <Skeleton variant="text" className="w-full" />
                        )}
                    </div>

                    {product.description && !loading ? (
                        <p className="text-gray-600 font-small text-[20px]">{product.description}</p>
                    ) : (
                        <Skeleton variant="text" className="w-full" />
                    )}

                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm">Lựa chọn</label>
                        <select
                            ref={selectRef}
                            onChange={handleChangeOption}
                            className="max-w-[400px] px-4 py-2 border text-sm border-gray-300 rounded-md"
                        >
                            {product.variantOptions?.map((item, index) => (
                                <option value={item.id} key={index}>
                                    {item.name || 'Mặc định'}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Quantity and Buy Button */}
                    <div className="flex items-center gap-4">
                        <CountNumber product={product} quantity={product?.quantity} onUpdateQuantity={updateQuantity} />
                        <Button rouded title="MUA HÀNG" />
                    </div>

                    {/* Social Sharing */}
                    <div className="flex items-center gap-4 mt-4 cursor-pointer">
                        <span className="text-sm font-semibold uppercase">Chia sẻ</span>
                        <FontAwesomeIcon className="text-blue-600" icon={faFacebook} />
                        <FontAwesomeIcon className="text-sky-500" icon={faTwitter} />
                        <FontAwesomeIcon className="text-red-500" icon={faGooglePlus} />
                    </div>
                </div>
            </div>

            <MenuProduct title={'Các sản phẩm liên quan'} />
        </div>
    );
}

export default ProductDetail;
