import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/footer/Footer';
import Navbar from '../Pages/Shared/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;