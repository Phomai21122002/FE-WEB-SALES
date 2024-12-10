import { useForm } from 'react-hook-form';

function CreateCategory() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSaveProduct = (product) => {
        console.log('Loại sản phẩm mới:', product);
        // Thêm logic lưu loại sản phẩm vào database hoặc state ở đây
    };

    const onSubmit = (data) => {
        handleSaveProduct(data);
        reset();
    };
    return (
        <div className="bg-white p-4 shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Thêm Loại Sản Phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-bold mb-1">Loại sản phẩm</label>
                    <input
                        type="text"
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('productName', { required: 'Loại sản phẩm là bắt buộc' })}
                        placeholder="Nhập loại sản phẩm"
                    />
                    {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-sm text-white p-2 rounded-md hover:bg-blue-600">
                    Lưu loại sản phẩm
                </button>
            </form>
        </div>
    );
}

export default CreateCategory;
