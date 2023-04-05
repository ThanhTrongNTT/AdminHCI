import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { IconArrowDown, IconSearch, IconSignIn } from '../components/icon/Icon';

const Navbar = () => {
    return (
        <>
            <div className='flex h-8 bg-transparent mt-3 justify-end'>
                <div className='flex'>
                    <div className='flex bg-white rounded-lg px-3 items-center'>
                        <span className='cursor-pointer px-2'>
                            <IconSearch />
                        </span>
                        <input type='text' className='outline-none' />
                    </div>
                    {
                        <Link to={'/login'} className='flex items-center p-2 cursor-pointer'>
                            <span>
                                <IconSignIn />
                            </span>
                            <span className='text-white p-1.5'>Sign-in</span>
                        </Link>
                    }

                    <div className='flex items-center mx-5'>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <p className='text-white'>Thanh Trong</p>
                                <Tippy
                                    interactive
                                    delay={[0, 200]}
                                    offset={[0, 10]}
                                    // visible
                                    render={(attrs) => (
                                        <div
                                            className='w-[238px] rounded-2xl'
                                            tabIndex={-1}
                                            {...attrs}
                                        ></div>
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
