import { useForm } from 'react-hook-form';
import { categories } from './Constant';

function CreateProduct() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSaveProduct = (product) => {
        console.log('Sản phẩm mới:', product);
        // Thêm logic lưu sản phẩm vào database hoặc state ở đây
    };

    const onSubmit = (data) => {
        handleSaveProduct(data);
        reset();
    };
    return (
        <div className="bg-white p-4 shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Thêm Sản Phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-bold mb-1">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('productName', { required: 'Tên sản phẩm là bắt buộc' })}
                        placeholder="Nhập tên sản phẩm"
                    />
                    {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Loại sản phẩm</label>
                    <select
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('category', { required: 'Vui lòng chọn loại sản phẩm' })}
                    >
                        <option value="">Chọn loại sản phẩm</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Ngày sử dụng</label>
                    <input
                        type="date"
                        className="max-w-[200px] text-sm p-2 border rounded-md"
                        {...register('startDate', { required: 'Ngày sử dụng là bắt buộc' })}
                    />
                    {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Ngày hết hạn</label>
                    <input
                        type="date"
                        className="max-w-[200px] text-sm p-2 border rounded-md"
                        {...register('endDate', { required: 'Ngày hết hạn là bắt buộc' })}
                    />
                    {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Số lượng sản phẩm</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        {...register('quantity', {
                            required: 'Số lượng là bắt buộc',
                            min: { value: 1, message: 'Số lượng phải lớn hơn 0' },
                        })}
                    />
                    {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Giá sản phẩm (VNĐ)</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        {...register('price', {
                            required: 'Giá sản phẩm là bắt buộc',
                            min: { value: 0, message: 'Giá sản phẩm phải lớn hơn hoặc bằng 0' },
                        })}
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-sm text-white p-2 rounded-md hover:bg-blue-600">
                    Lưu sản phẩm
                </button>
            </form>
        </div>
    );
}

export default CreateProduct;
