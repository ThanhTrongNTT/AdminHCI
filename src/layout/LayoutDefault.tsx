import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../modules';

const LayoutDefault = () => {
    return (
        <div className='flex'>
            <div className='flex-initial w-[25%]'>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutDefault;
