import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Main = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Outlet className="flex-grow"></Outlet>
            <Footer className="mt-auto"></Footer>
        </div>
    );
};

export default Main;