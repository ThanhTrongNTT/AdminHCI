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
                {/* <Outlet /> */}
                <div className='flex h-screen flex-col m-auto'>
                    <div className='flex justify-between'>
                        <ul className='flex'></ul>
                        <div className='p-4 mr-4'>
                            <p className='text-white font-semibold text-2xl cursor-pointer'>
                                Sign-in
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <code className='m-auto text-white text-7xl font-bold'>
                            console.log('abc'); &ensp; thanh trong
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutDefault;
