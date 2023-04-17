import React from 'react';

const ListOrder = () => {
    return (
        <>
            <div className='overflow-x-auto rounded-2xl mx-8 border border-gray-c4'>
                <table className='bg-white  w-[100%] text-sm text-left text-gray-400'>
                    <thead>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Avatar
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Email
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Full Name
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Phone Number
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white border-b border-gray-c4 hover:bg-gray-c2 cursor-pointer'>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                123231231
                            </th>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                thanhtrong@gmail.com
                            </th>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                Nguyen Thanh Trong
                            </th>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                0352484764
                            </th>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                Delete
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListOrder;
