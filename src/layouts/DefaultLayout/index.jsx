import PropTypes from 'prop-types';
import Footer from '~/components/Footer';
import Header from '~/components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div className="bg-gray-100">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
