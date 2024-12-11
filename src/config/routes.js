const routesAdmin = Object.fromEntries(
    Object.entries({
        admin: '',
        adminProduct: 'product',
        adminListProduct: 'listproduct',
        adminCategory: 'category',
        adminListCategory: 'listcategory',
        adminListConfirmOrder: 'confirmorder',
        adminListCancelOrder: 'cancelorder',
        adminListBill: 'bill',
        adminRevenue: 'revenue',
    }).map(([key, value]) => [key, `/admin/${value}`]),
);

const routes = {
    home: '/',
    product: '/product/:id',
    cart: '/cart',
    order: '/order',
    login: '/login',
    signup: '/signup',
    ...routesAdmin,
};

export default routes;
