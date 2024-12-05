import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
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