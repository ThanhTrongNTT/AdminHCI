import { Avatar, Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { EditEmployeeDTO } from '~/data/UserInterface';
import DetailUser from '~/screens/detail/DetailUser';

const CardUser = (user: EditEmployeeDTO) => {
    const [modalDelete, setModalDelete] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const onCloseEdit = () => {
        setModalEdit(!modalEdit);
    };
    const onSubmitEdit = () => {
        setModalEdit(!modalEdit);
    };
    const onDelete = () => {
        setModalDelete(!modalDelete);
    };
    const onCancelDelete = () => {
        setModalDelete(!modalDelete);
    };
    return (
        <>
            <Modal show={modalEdit} size='7xl' position='center' popup={true} onClose={onCloseEdit}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <DetailUser />
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
                    <p className='text-black font-semibold text-lg'>
                        Email: ntt.thanhtrong@gmail.com
                    </p>
                    <p className=''>User Name: Thanh Trong</p>
                    <p className=''>Address: 93 Ben Chuong Duong</p>
                    <p className=''>Phone Number: +8482782365273</p>
                    <p className=''>Gender: Male</p>
                </div>
                <div className='flex justify-center items-center py-4 mt-3'>
                    <Button color='light' className='mx-2' outline={false} onClick={onCloseEdit}>
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

export default CardUser;
