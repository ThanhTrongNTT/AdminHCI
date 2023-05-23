import Tippy from '@tippyjs/react/headless';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowDown, IconSearch, IconSignIn, IconSignOut } from '../components/icon/Icon';
import authApi from '~/api/auth.api';
const { default: jwt_decode } = require('jwt-decode');

const Navbar = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const user = accessToken && jwt_decode(accessToken);
    const navigate = useNavigate();
    const handleLogout = () => {
        authApi
            .logout(user.id)
            .then((response) => {
                sessionStorage.removeItem('accessToken');
                sessionStorage.removeItem('refreshToken');
                sessionStorage.removeItem('admin');
                navigate('/login');
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <div className='flex h-8 bg-transparent mt-3 justify-end'>
                <div className='flex'>
                    {/* <div className='flex bg-white rounded-lg px-3 items-center'>
                        <span className='cursor-pointer px-2'>
                            <IconSearch />
                        </span>
                        <input type='text' className='outline-none' />
                    </div> */}
                    <div className='flex items-center mx-5'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <p className='text-white'>Thanh Trong</p>
                                <Tippy
                                    interactive
                                    delay={[0, 200]}
                                    offset={[-50, 5]}
                                    // visible
                                    placement='bottom-start'
                                    render={(attrs) => (
                                        <div
                                            className='bg-white w-[200px] rounded-[4px] cursor-pointer'
                                            {...attrs}
                                        >
                                            <div
                                                className='py-[10px] pl-4 pr-2 hover:bg-[rgba(22,_24,_35,_0.04)]'
                                                onClick={handleLogout}
                                            >
                                                <div className='flex items-center'>
                                                    <i className='mr-5'>
                                                        <IconSignOut />
                                                    </i>
                                                    <span>Sign Out</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <span className='cursor-pointer px-2 py-4 text-white'>
                                        <IconArrowDown />
                                    </span>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
