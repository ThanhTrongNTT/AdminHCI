import { Avatar, Button } from 'flowbite-react';
import React from 'react';
import { EditEmployeeDTO } from '~/data/UserInterface';

const CardUser = (user: EditEmployeeDTO) => {
    return (
        <div className='w-[300px] h-[450px] shadow-xl bg-white m-2 rounded-2xl'>
            <div>
                <img
                    className='h-[120px] w-full rounded-t-2xl'
                    src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    alt=''
                />
            </div>
            <div className='py-4 px-6 mt-[-55px]'>
                <Avatar
                    size={'lg'}
                    img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                    rounded={true}
                />
            </div>
            <div className='flex flex-col items-center'>
                <p className='bg-gray-c3 rounded-2xl px-2'>ID: 1</p>
                <p className='text-black font-semibold text-lg'>Email: ntt.thanhtrong@gmail.com</p>
                <p className=''>User Name: Thanh Trong</p>
                <p className=''>Address: 93 Ben Chuong Duong</p>
                <p className=''>Phone Number: +8482782365273</p>
                <p className=''>Gender: Male</p>
            </div>
            <div className='flex justify-center items-center py-4 mt-3'>
                <Button color='light' className='mx-2' outline={false}>
                    Update
                </Button>
                <Button outline={false} color='failure' className='mx-2'>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default CardUser;
