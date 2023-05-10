import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import NewProduct from '~/screens/new/NewProduct';

const Cardproduct = () => {
    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };
    const onSubmitUpdate = () => {
        setModalUpdate(!modalUpdate);
    };
    const onDelete = () => {
        setModalDelete(!modalDelete);
    };
    const onCancelDelete = () => {
        setModalDelete(!modalDelete);
    };
    return (
        <>
            <Modal
                show={modalUpdate}
                size='7xl'
                position='center'
                popup={true}
                onClose={onCloseUpdate}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProduct onCancel={onCloseUpdate} onSubmit={onCloseUpdate} />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalDelete}
                size='xl'
                position='center'
                popup={true}
                onClose={onCancelDelete}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <>
                        <div className='items-center text-center'>
                            <h1 className='text-2xl font-bold p-3'>Delete User</h1>
                            <span>
                                <h1>
                                    Do you want delete user with user email:
                                    ntt.thanhtrong@gmail.com
                                </h1>{' '}
                                You can't undo this action afterwards.
                            </span>

                            <div className='flex items-center justify-center gap-20 mt-10'>
                                <Button color='success' onClick={onCancelDelete}>
                                    Yes
                                </Button>
                                <Button color='failure' onClick={onCancelDelete}>
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </>
                </Modal.Body>
            </Modal>
            <div className='w-[300px] shadow-xl bg-white m-2 rounded-2xl'>
                <div>
                    <img
                        className='h-[300px] w-full rounded-t-2xl'
                        src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        alt=''
                    />
                </div>
                <div className='flex flex-col mt-3'>
                    <p className='bg-gray-c3 rounded-2xl px-2 mx-auto'>ID: 1</p>
                    <div className='ml-5'>
                        <p className='text-black font-semibold text-lg'>Product Name: Ao thun</p>
                        <p className=''>Title: Thanh Trong</p>
                        <p className=''>Subtitle: 93 Ben Chuong Duong</p>
                        <p className=''>Size: +8482782365273</p>
                        <p className=''>Color: Male</p>
                    </div>
                </div>
                <div className='flex justify-center items-center py-4 mt-3'>
                    <Button color='light' className='mx-2' outline={false} onClick={onCloseUpdate}>
                        Update
                    </Button>
                    <Button
                        outline={false}
                        color='failure'
                        className='mx-2'
                        onClick={onCancelDelete}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Cardproduct;
