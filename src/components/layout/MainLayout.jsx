import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MainLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <ScrollToTop />
            <div
                className={`${user ? "h-[71px] md:h-[68px]" : "h-[84px] md:h-[68px]"
                    }`}
            >
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-857px)] md:min-h-[calc(100vh-373px)]">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
};

export default MainLayout;