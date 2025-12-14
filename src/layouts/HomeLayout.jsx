import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>          
        </div>
    );
};

export default HomeLayout;