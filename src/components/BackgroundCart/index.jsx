function BackgroundCart({ className, children }) {
    return (
        <div className={`${className} flex items-center bg-white py-2 px-8 mb-4 font-semibold text-gray-600 shadow-sm`}>
            {children}
        </div>
    );
}

export default BackgroundCart;
