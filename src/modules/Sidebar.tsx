import { Link } from 'react-router-dom';
import LogoDefault from '~/components/logo/LogoDefault';
import {
    IconCart,
    IconCategory,
    IconCourse,
    IconDashboard,
    IconUser,
} from '../components/icon/Icon';

const Sidebar = () => {
    const menus = [
        { title: 'Dashboard', link: '/admin' },
        { title: 'User', link: 'user', icon: <IconUser /> },
        {
            title: 'Product',
            link: 'product',
            icon: <IconCategory />,
        },
        {
            title: 'Product Collection',
            link: 'product-collection',
            icon: <IconCategory />,
        },
        {
            title: 'Product Category',
            link: 'product-category',
            icon: <IconCategory />,
        },
        {
            title: 'Product Style',
            link: 'product-style',
            icon: <IconCategory />,
        },
        {
            title: 'Product Color',
            link: 'product-color',
            icon: <IconCategory />,
        },
        {
            title: 'Product Size',
            link: 'product-size',
            icon: <IconCategory />,
        },
        { title: 'Order', link: 'order', icon: <IconCart /> },
        { title: 'Sale', link: 'sale', icon: <IconCourse /> },
    ];
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
                <ul className='pt-2'>
                    {menus.map((menu, index) => (
                        <Link to={menu.link} key={index}>
                            <li className='text-black text-sm flex font-OpenSans items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between'>
                                <span className='text-2l block float-left'>
                                    {menu.icon ? menu.icon : <IconDashboard />}
                                </span>
                                <span className='text-base font-OpenSans font-medium flex-1 duration-200'>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
