import { memo } from 'react';

function ButtonAddToCard({ onAdd, product, quantity }) {
    return (
        <button
            onClick={() => onAdd(product.id, quantity)}
            className="text-[12px] bg-transparent text-gray-700 border border-yellow-400 py-1 px-2 rounded-md transition-all hover:bg-yellow-200"
        >
            Thêm vào giỏ
        </button>
    );
}

export default memo(ButtonAddToCard);
