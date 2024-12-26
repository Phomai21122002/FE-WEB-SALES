import HeaderTable from '~/components/HeaderTabel';
import { listTitle, orderList, updatedProducts } from './Constant';
import SearchSortListOfAdmin from '~/components/SearchSortListOfAdmin';
import { useEffect, useState } from 'react';
import { GetProducts } from '~/services/Product';

function Product() {
    const [products, setProducts] = useState([]);

    const editOrder = (id) => {
        console.log('Editing order', id);
    };
    const deleteOrder = (id) => {
        console.log('Deleting order', id);
    };

    useEffect(() => {
        const getAllProduct = async () => {
            try {
                const res = await GetProducts();
                const resultProducts = updatedProducts(res);
                console.log(resultProducts);
                setProducts(resultProducts);
            } catch (err) {
                console.error('Error fetching product data: ', err);
            }
        };
        getAllProduct();
    }, []);

    return (
        <>
            <SearchSortListOfAdmin />
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-sm">
                    <HeaderTable listTitle={listTitle} />
                    <tbody>
                        {orderList.map((order, index) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-6">{index + 1}</td>
                                <td className="py-3 px-6">{order.productName}</td>
                                <td className="py-3 px-6">{order.quantity}</td>
                                <td className="py-3 px-6">{order.price.toLocaleString()} VND</td>
                                <td className="py-3 px-6">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs ${
                                            new Date(order.dateEnd) < new Date()
                                                ? 'bg-red-200 text-red-800'
                                                : 'bg-green-200 text-green-800'
                                        }`}
                                    >
                                        {order.dateStart} - {order.dateEnd}
                                    </span>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="text-blue-600 hover:underline mr-2"
                                        onClick={() => editOrder(order.id)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                    <button
                                        className="text-red-600 hover:underline"
                                        onClick={() => deleteOrder(order.id)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {orderList.length === 0 && <div className="text-center py-6 text-gray-500">Không có đơn hàng nào</div>}
            </div>
        </>
    );
}

export default Product;
