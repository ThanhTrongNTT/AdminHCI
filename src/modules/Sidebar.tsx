import { Link } from 'react-router-dom';
import {
    IconBlog,
    IconDashboard,
    IconCategory,
    IconUser,
    IconCourse,
} from '../components/icon/Icon';
import { toast } from 'react-toastify';
import LogoDefault from '~/components/logo/LogoDefault';

const Sidebar = () => {
    const Menus = [
        { title: 'Dashboard', link: '/admin' },
        { title: 'Users', link: 'users', icon: <IconUser /> },
        {
            title: 'Locations',
            link: 'locations',
            icon: <IconBlog />,
        },
        { title: 'Tours', link: 'tours', icon: <IconCourse /> },
        { title: 'Bookings', link: 'bookings', icon: <IconCategory /> },
        // { title: 'Comments', link: 'comments', icon: <IconComment /> },
        // {
        //     title: 'Analysis',
        //     link: 'analysis',
        //     icon: <IconAnalytic />,
        //     submenu: true,
        //     submenuItems: [
        //         { id: 0, title: 'Users', link: 'user' },
        //         { id: 1, title: 'Posts', link: 'post' },
        //         { id: 2, title: 'Comments', link: 'comment' },
        //     ],
        // },
    ];
    return (
        <div className='bg-white rounded-xl m-4 py-5 w-20 lg:w-60 fixed top-0'>
            <div className='flex justify-center p-10'>
                {/* <Logo /> */}
                {/* <Link to={'/admin'}>
                    <h1 className='text-sm font-OpenSans font-bold'>Teaching Me</h1>
                </Link> */}
                <LogoDefault />
            </div>
            <hr className='mx-6 border-1.5 border-gray-c2' />
            <div className='px-6'>
                <ul className='pt-2'>
                    {Menus.map((menu, index) => (
                        <>
                            <li
                                key={index}
                                className='text-black text-sm flex font-OpenSans items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between'
                            >
                                <Link to={menu.link} className='flex items-center'>
                                    <span className='text-2l block float-left'>
                                        {menu.icon ? menu.icon : <IconDashboard />}
                                    </span>
                                    <span className='text-base font-OpenSans font-medium flex-1 duration-200'>
                                        {menu.title}
                                    </span>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
