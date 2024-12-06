const routesAdmin = {
    admin: '/admin',
};

const routes = {
    home: '/home',
    product: '/product/:id',
    cart: '/cart',
    order: '/order',
    login: '/login',
    signup: '/signup',
    ...routesAdmin,
};

export default routes;
