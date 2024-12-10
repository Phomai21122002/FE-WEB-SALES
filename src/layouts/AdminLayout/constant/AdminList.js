import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const ToDoList = () => [
    {
        title: 'Sản phẩm',
        list: [
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Thêm sản phẩm',
                path: `/admin/product`,
            },
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Danh sách sản phẩm',
                path: `/admin/listproduct`,
            },
        ],
    },
    {
        title: 'Loại sản phẩm',
        list: [
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Thêm loại sản phẩm',
                path: `/admin/category`,
            },
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Danh sách loại sản phẩm',
                path: `/admin/listcategory`,
            },
        ],
    },
    {
        title: 'Đặt hàng',
        list: [
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Danh sách xác nhận đơn hàng',
                path: `/admin/category`,
            },
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Danh sách hủy bỏ đơn hàng',
                path: `/admin/category`,
            },
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Danh sách hóa đơn',
                path: `/admin/listcategory`,
            },
        ],
    },
    {
        title: 'Báo cáo thống kê',
        list: [
            {
                icon: <PeopleAltIcon fontSize="small" />,
                title: 'Doanh thu',
                path: `/admin/category`,
            },
        ],
    },
];

export const UserItems = () => [
    {
        icon: <PeopleAltIcon fontSize="small" />,
        title: 'Danh sách đặt hàng',
        path: `/admin`,
    },
];
