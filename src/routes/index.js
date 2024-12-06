import config from '~/config';
import { AdminLayout, AuthLayout } from '~/layouts';
import { Cart, Home, Login, Order, Product, ProductDetail, SignUp } from '~/pages';

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

const adminRoutes = [{ path: config.routes.admin, component: Product, layout: AdminLayout }];

export { publicRoutes, privateRoutes, adminRoutes };
