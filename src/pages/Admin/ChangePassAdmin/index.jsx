import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import routes from '~/config/routes';

function ChangePassAdmin() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleChangePassword = (data) => {
        console.log('Thông tin mật khẩu:', data);
        // Thêm logic để thay đổi mật khẩu (gửi dữ liệu lên server)
    };

    const onSubmit = (data) => {
        handleChangePassword(data);
        reset();
    };

    const handleBack = () => {
        navigate(routes.admin);
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Thay Đổi Mật Khẩu</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-bold mb-1">Mật khẩu hiện tại</label>
                    <input
                        type="password"
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('currentPassword', { required: 'Mật khẩu hiện tại là bắt buộc' })}
                        placeholder="Nhập mật khẩu hiện tại"
                    />
                    {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Mật khẩu mới</label>
                    <input
                        type="password"
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('newPassword', {
                            required: 'Mật khẩu mới là bắt buộc',
                            minLength: {
                                value: 6,
                                message: 'Mật khẩu phải có ít nhất 6 ký tự',
                            },
                        })}
                        placeholder="Nhập mật khẩu mới"
                    />
                    {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Xác nhận mật khẩu mới</label>
                    <input
                        type="password"
                        className="w-full text-sm p-2 border rounded-md"
                        {...register('confirmPassword', {
                            required: 'Xác nhận mật khẩu là bắt buộc',
                            validate: (value, { newPassword }) => value === newPassword || 'Mật khẩu không khớp',
                        })}
                        placeholder="Nhập lại mật khẩu mới"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>

                <div className="flex gap-4">
                    <button type="submit" className="bg-blue-500 text-sm text-white p-2 rounded-md hover:bg-blue-600">
                        Lưu thay đổi
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-sm text-white p-2 rounded-md hover:bg-gray-600"
                        onClick={handleBack}
                    >
                        Quay lại
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassAdmin;
