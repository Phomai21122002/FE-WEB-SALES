import Footer from '~/components/Footer';
import Header from '~/components/Header/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
