import HeaderTable from '~/components/HeaderTabel';
import { listTitle, orderList } from './Constant';
import BodyTabel from '~/components/BodyTabel';

function BoardCancelOrder() {
    const editOrder = (id) => {
        console.log('Editing order', id);
    };
    const deleteOrder = (id) => {
        console.log('Deleting order', id);
    };
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full text-left text-sm">
                <HeaderTable listTitle={listTitle} />
                <tbody>
                    {orderList.map((order, index) => (
                        <BodyTabel key={order.id} index={index} item={order} onDel={deleteOrder} onEdit={editOrder} />
                    ))}
                </tbody>
            </table>
            {orderList.length === 0 && <div className="text-center py-6 text-gray-500">Không có đơn hàng nào</div>}
        </div>
    );
}

export default BoardCancelOrder;
