import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { IconPlus } from '~/components/icon/Icon';
import NewProductColor from '../new/NewProductColor';
import { isLightColor } from '~/utils/Color';
import { className } from '~/utils/className';

const ListProductColor = () => {
    const [modalNew, setModalNew] = useState(false);
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const color = '#03417F';
    return (
        <>
            <div>
                <Modal
                    show={modalNew}
                    size='7xl'
                    position='center'
                    popup={true}
                    onClose={onCloseNew}
                >
                    <Modal.Header className='bg-white' />
                    <Modal.Body className='bg-white'>
                        <NewProductColor onSubmit={() => {}} onCancel={onCloseNew} />
                    </Modal.Body>
                </Modal>
            </div>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Color
                </span>
            </button>
            <div className='overflow-x-auto rounded-2xl border mx-4 border-gray-c4'>
                <table className='bg-white  w-full text-sm text-left text-gray-400'>
                    <thead>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Color Name
                            </th>
                            <th scope='col' className='px-6'>
                                Color Value
                            </th>
                            <th scope='col' className='px-6'>
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
                                Red
                            </th>
                            <th scope='row' className='py-4 px-6 font-medium whitespace-nowrap'>
                                <span
                                    style={{ backgroundColor: color }}
                                    className={className(
                                        isLightColor(color) ? 'text-black ' : 'text-white',
                                        'p-2 rounded-xl',
                                    )}
                                >
                                    {color}
                                </span>
                            </th>
                            <th
                                scope='row'
                                className='py-4 px-6 font-medium text-black whitespace-nowrap'
                            >
                                <div className='flex items-center'>
                                    <span className='text-success'>
                                        <p className='hover:bg-black'>Update</p>
                                    </span>
                                    <span className='text-warning'>Delete</span>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListProductColor;
