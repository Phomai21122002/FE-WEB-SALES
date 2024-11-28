import config from '~/config';
import { AuthLayout } from '~/layouts';
import { Home, Login, SignUp } from '~/pages';

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: AuthLayout },
    { path: config.routes.signup, component: SignUp, layout: AuthLayout },
];

const privateRoutes = [{ path: config.routes.home, component: Home }];

export { publicRoutes, privateRoutes };
