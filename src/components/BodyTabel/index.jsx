import React from 'react';

const BodyTabel = ({ index, item = {}, onEdit, onDel }) => {
    return (
        <tr key={item.id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{item.username}</td>
            <td className="py-3 px-6 min-w-[120px]">{item.productName}</td>
            <td className="py-3 px-6">{item.quantity}</td>
            <td className="py-3 px-6 min-w-[120px]">{item.address}</td>
            <td className="py-3 px-6">{item.totalPrice.toLocaleString()} VND</td>
            <td className="py-3 px-6">
                <span
                    className={`px-3 py-1 rounded-full text-xs ${
                        item.status === 'Completed'
                            ? 'bg-green-200 text-green-800'
                            : item.status === 'Pending'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-red-200 text-red-800'
                    }`}
                >
                    {item.status}
                </span>
            </td>
            <td className="py-3 px-6 min-w-[120px]">
                <button className="text-blue-600 hover:underline mr-2" onClick={() => onEdit(item.id)}>
                    Xác nhận
                </button>
                <button className="text-red-600 hover:underline" onClick={() => onDel(item.id)}>
                    Xóa
                </button>
            </td>
        </tr>
    );
};

export default BodyTabel;
