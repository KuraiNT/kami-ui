import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="container">
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
