import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '~/modules';

const LayoutDefault = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='flex flex-row mt-6 px-4 gap-5'>
                    <Sidebar />
                    <div className='flex-1'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutDefault;
