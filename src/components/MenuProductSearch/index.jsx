import { useEffect, useState } from 'react';
import Product from '../Product';
import { GetProducts } from '~/services/Product';
import { updatedCategories, updatedProducts } from './Constains';
import { useStorage } from '~/Contexts';
import { useNavigate } from 'react-router-dom';
import routes from '~/config/routes';
import { AddCart } from '~/services/Cart';
import { FilterList } from '@mui/icons-material';
import { Pagination } from '@mui/material';
import { GetCategories, GetCategory } from '~/services/Category';

function MenuProductSearch() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { userData, getDataCartNow } = useStorage();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const res = await GetProducts();
                const resultProducts = updatedProducts(res);
                setProducts(resultProducts);
                const resCate = await GetCategories();
                const resultCategories = updatedCategories(resCate.data);
                setCategories(resultCategories);
            } catch (err) {
                console.error('Error fetching product data: ', err);
            }
        };
        getAllProduct();
    }, []);

    useEffect(() => {
        let filteredProducts = [...products];

        if (minPrice !== '' || maxPrice !== '') {
            filteredProducts = filteredProducts.filter((product) => {
                const price = product.product.price;
                const isWithinMin = minPrice === '' || price >= parseFloat(minPrice);
                const isWithinMax = maxPrice === '' || price <= parseFloat(maxPrice);
                return isWithinMin && isWithinMax;
            });
        }

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        let currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

        if (sortOrder === 'Thấp đến Cao') {
            currentProducts = currentProducts.sort((a, b) => a.product.price - b.product.price);
        } else if (sortOrder === 'Cao đến Thấp') {
            currentProducts = currentProducts.sort((a, b) => b.product.price - a.product.price);
        }

        setPaginatedProducts(currentProducts);
    }, [currentPage, products, sortOrder, minPrice, maxPrice]);

    const addToCart = async (productId, quantity) => {
        if (userData && Object.keys(userData).length > 0) {
            const res = await AddCart({
                quantity: quantity,
                userId: userData?.userId,
                productId: productId,
            });
            res && getDataCartNow();
        } else {
            navigate(routes.login);
        }
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        const getProductByIdCategory = async () => {
            try {
                const resCate = await GetCategory({ id: Number(selectedCategory) });
                // const resultProducts = updatedProducts(resCate);
                console.log(resCate);

                // setProducts(resultProducts);
            } catch (err) {
                console.error('Error fetching product data: ', err);
            }
        };
        getProductByIdCategory();
    }, [selectedCategory]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="flex pt-20">
            <div className="w-1/4 p-4 border-r border-gray-200">
                <div className="font-semibold text-lg mb-6 flex items-center">
                    <FilterList className="mr-2 text-gray-500" /> Bộ lọc tìm kiếm
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Theo Danh Mục</div>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                    >
                        <option>Chọn loại sản phẩm</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Theo Giá</div>
                    <div className="flex justify-between text-xs">
                        <input
                            type="number"
                            className="w-1/2 p-2 border border-gray-300 rounded"
                            placeholder="Từ"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <span className="mx-1">-</span>
                        <input
                            type="number"
                            className="w-1/2 p-2 border border-gray-300 rounded"
                            placeholder="Đến"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4">
                <div className="mb-6">
                    <div className="text-xl font-medium text-gray-800">
                        Kết quả tìm kiếm cho từ khoá <span className="font-semibold text-blue-600">kết qả</span>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center">
                            <div className="text-sm text-gray-500 mr-4">Sắp xếp theo:</div>
                            <select
                                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={sortOrder}
                                onChange={handleSortChange}
                            >
                                <option value="">Chọn sắp xếp</option>
                                <option value="Thấp đến Cao">Giá thấp đến cao</option>
                                <option value="Cao đến Thấp">Giá cao đến thấp</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                size="small"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {paginatedProducts?.map((product) => (
                        <Product key={product.product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuProductSearch;
