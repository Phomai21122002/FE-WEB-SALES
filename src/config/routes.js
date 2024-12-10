const routesAdmin = {
    admin: '',
    adminProduct: 'product',
    adminListProduct: 'listproduct',
    adminCategory: 'category',
    adminListCategory: 'listcategory',
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
