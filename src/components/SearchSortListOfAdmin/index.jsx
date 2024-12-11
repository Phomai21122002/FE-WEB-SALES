import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { categories } from '~/pages/Admin/CreateProduct/Constant';

function SearchSortListOfAdmin() {
    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 overflow-hidden mb-4">
            <div className="flex items-center justify-end">
                <label className="block text-sm font-bold mr-4">Sort</label>
                <select className="text-sm p-2 ring-2 ring-gray-300 rounded-md">
                    <option value="">Chọn loại sản phẩm</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-center justify-end">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="ml-2 max-w-[300px] ring-2 ring-gray-300 rounded-lg p-[6px] text-sm text-gray-700"
                />
                <div className="flex items-center text-sm rounded-md py-2 px-3 ml-2 bg-gray-200 hover:bg-yellow-200 transition duration-200 cursor-pointer">
                    <SearchOutlinedIcon sx={{ fontSize: '20px' }} className="text-gray-500" />
                    Search
                </div>
            </div>
        </div>
    );
}

export default SearchSortListOfAdmin;
