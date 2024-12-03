import PropTypes from 'prop-types';
import Header from '~/components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div className="bg-gray-100">
            <Header />
            {children}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
