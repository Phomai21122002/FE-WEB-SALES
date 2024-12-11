import config from '~/config';
import { AdminLayout, AuthLayout } from '~/layouts';
import {
    BoardOrder,
    Cart,
    Category,
    CreateCategory,
    CreateProduct,
    Home,
    Login,
    Order,
    Product,
    ProductDetail,
    SignUp,
} from '~/pages';
import BoardBill from '~/pages/Admin/BoardBill';
import BoardCancelOrder from '~/pages/Admin/BoardCancelOrder';
import BoardConfirmOrder from '~/pages/Admin/BoardConfirmOrder';

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: AuthLayout },
    { path: config.routes.signup, component: SignUp, layout: AuthLayout },
];

const privateRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.order, component: Order },
    { path: config.routes.product, component: ProductDetail },
];

const adminRoutes = [
    { path: config.routes.admin, component: BoardOrder, layout: AdminLayout },
    { path: config.routes.adminProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.adminListProduct, component: Product, layout: AdminLayout },
    { path: config.routes.adminCategory, component: CreateCategory, layout: AdminLayout },
    { path: config.routes.adminListCategory, component: Category, layout: AdminLayout },
    { path: config.routes.adminListConfirmOrder, component: BoardConfirmOrder, layout: AdminLayout },
    { path: config.routes.adminListCancelOrder, component: BoardCancelOrder, layout: AdminLayout },
    { path: config.routes.adminListBill, component: BoardBill, layout: AdminLayout },
];

export { publicRoutes, privateRoutes, adminRoutes };
