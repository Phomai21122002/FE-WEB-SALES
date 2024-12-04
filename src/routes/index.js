import config from '~/config';
import { AuthLayout } from '~/layouts';
import { Cart, Home, Login, Order, SignUp } from '~/pages';

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: AuthLayout },
    { path: config.routes.signup, component: SignUp, layout: AuthLayout },
];

const privateRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.order, component: Order },
];

export { publicRoutes, privateRoutes };
