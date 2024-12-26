import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemoveOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const ToDoList = () => [
    {
        title: 'Sản phẩm',
        list: [
            {
                icon: <DifferenceOutlinedIcon fontSize="small" />,
                title: 'Thêm sản phẩm',
                path: `/admin/product`,
            },
            {
                icon: <ReceiptLongOutlinedIcon fontSize="small" />,
                title: 'Danh sách sản phẩm',
                path: `/admin/listproduct`,
            },
        ],
    },
    {
        title: 'Loại sản phẩm',
        list: [
            {
                icon: <PlaylistAddOutlinedIcon fontSize="small" />,
                title: 'Thêm loại sản phẩm',
                path: `/admin/category`,
            },
            {
                icon: <ReceiptLongOutlinedIcon fontSize="small" />,
                title: 'Danh sách loại sản phẩm',
                path: `/admin/listcategory`,
            },
        ],
    },
    {
        title: 'Đặt hàng',
        list: [
            {
                icon: <BallotOutlinedIcon fontSize="small" />,
                title: 'Danh sách xác nhận đơn hàng',
                path: `/admin/confirmorder`,
            },
            {
                icon: <PlaylistRemoveOutlinedIcon fontSize="small" />,
                title: 'Danh sách hủy bỏ đơn hàng',
                path: `/admin/cancelorder`,
            },
            {
                icon: <PaymentsOutlinedIcon fontSize="small" />,
                title: 'Danh sách hóa đơn',
                path: `/admin/bill`,
            },
        ],
    },
    {
        title: 'Báo cáo thống kê',
        list: [
            {
                icon: <PaymentsOutlinedIcon fontSize="small" />,
                title: 'Doanh thu',
                path: `/admin/revenue`,
            },
        ],
    },
    {
        title: 'Danh sách Người Dùng',
        list: [
            {
                icon: <AccountCircleIcon fontSize="small" />,
                title: 'Khách hàng',
                path: `/admin/revenue`,
            },
        ],
    },
];

export const UserItems = () => [
    {
        icon: <DescriptionOutlinedIcon fontSize="small" />,
        title: 'Danh sách đặt hàng',
        path: `/admin`,
    },
];
