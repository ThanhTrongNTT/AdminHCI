import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoDefault from '~/components/logo/LogoDefault';
import {
    IconCart,
    IconCategory,
    IconCourse,
    IconDashboard,
    IconUser,
} from '../components/icon/Icon';
import { className } from '~/utils/className';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path: string) => {
        return pathname.replace('/admin', '') === path;
    };
    const [pathname, setPathname] = useState('');
    const menus = [
        { title: 'User', link: 'user' },
        {
            title: 'Product',
            link: 'product',
        },
        {
            title: 'Product Collection',
            link: 'product-collection',
            isActive: false,
            notActive: true,
        },
        {
            title: 'Product Category',
            link: 'product-category',
        },
        {
            title: 'Product Style',
            link: 'product-style',
        },
        {
            title: 'Product Color',
            link: 'product-color',
        },
        {
            title: 'Product Size',
            link: 'product-size',
        },
        { title: 'Order', link: 'order' },
        { title: 'Sale', link: 'sale' },
    ];
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname]);

    return (
        <div className='bg-white rounded-xl py-5 w-20 lg:w-[250px] h-full'>
            <div className='flex justify-center p-4'>
                {/* <Logo /> */}
                {/* <Link to={'/admin'}>
                    <h1 className='text-sm font-OpenSans font-bold'>Teaching Me</h1>
                </Link> */}
                <LogoDefault />
            </div>
            <hr className='mx-6 border-1.5 border-gray-c2' />
            <div className='px-6'>
                {menus.map((menu, index) => (
                    // <Link to={menu.link} key={index}>
                    //     <li
                    //         className={className(
                    //             'text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between ',
                    //             isActive(
                    //                 menu.link.replace('/admin', '')
                    //                     ? 'bg-gray-c2 font-semibold'
                    //                     : '',
                    //             ),
                    //         )}
                    //     >
                    //         <span className='text-base font-OpenSans font-medium flex-1 duration-200'>
                    //             {menu.title}
                    //         </span>
                    //     </li>
                    // </Link>
                    <NavLink
                        key={index}
                        to={menu.link}
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-gray-c3 font-bold rounded-md text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white mt-2 justify-between'
                                : 'font-normal text-[#8E94A3] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between'
                        }
                    >
                        {menu.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
