import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div className='h-[68px]'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;