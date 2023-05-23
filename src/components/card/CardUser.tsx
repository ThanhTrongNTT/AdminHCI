import { Avatar, Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { EditEmployeeDTO } from '~/data/UserInterface';
import DetailUser from '~/screens/detail/DetailUser';

type UserCartProps = {
    onUpdate: (id: string, data: any) => void;
    user: any;
};

const CardUser = ({ onUpdate, user }: UserCartProps) => {
    const [modalEdit, setModalEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState(user);
    const onCloseEdit = () => {
        setSelectedUser(user);
        setModalEdit(!modalEdit);
    };
    const onSubmitEdit = (values: any) => {
        onUpdate(user.id, values);
        setModalEdit(!modalEdit);
    };
    return (
        <>
            <Modal show={modalEdit} size='7xl' position='center' popup={true} onClose={onCloseEdit}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <DetailUser
                        onSubmit={onSubmitEdit}
                        onCancel={onCloseEdit}
                        user={selectedUser}
                    />
                </Modal.Body>
            </Modal>
            <div className='w-[300px] shadow-xl bg-white m-2 rounded-2xl'>
                <div className='py-4 px-6'>
                    <Avatar
                        size={'lg'}
                        // img={user.}
                        img='https://cdn-icons-png.flaticon.com/512/727/727399.png?w=826&t=st=1684741655~exp=1684742255~hmac=5ddb28695b8590e3c08fad8896ddd9315c7d8120fa70ff95475f51892bbe25a4'
                        rounded={true}
                    />
                </div>
                <div className='flex flex-col text-left px-4'>
                    <span className='flex items-center'>
                        <p className='text-black font-semibold text-lg'>Email: </p>
                        <p className='px-2'>{user.email}</p>
                    </span>
                    <span className='flex flex-wrap flex-col h-[52px]'>
                        <p className='text-black font-semibold text-lg'>User Name:</p>
                        <p className='px-2'>{user.fullName}</p>
                    </span>
                    <span className='flex flex-wrap items-center'>
                        <p className='text-black font-semibold text-lg'>Address:</p>
                        <p className='px-2'>{user.address ? user.address : 'NONE'}</p>
                    </span>
                    <span className='flex flex-wrap items-center'>
                        <p className='text-black font-semibold text-lg'>Phone Number:</p>
                        <p className='px-2'>{user.phoneNumber ? user.phoneNumber : 'NONE'}</p>
                    </span>
                    <span className='flex flex-wrap items-center'>
                        <p className='text-black font-semibold text-lg'>Gender:</p>
                        <p className='px-2'>{user.gender}</p>
                    </span>
                    <span className='flex flex-wrap items-center'>
                        <p className='text-black font-semibold text-lg'>Admin:</p>
                        <p className='px-2'>{user.role.roleName === 'ADMIN' ? 'TRUE' : 'FALSE'}</p>
                    </span>
                    <span className='flex flex-wrap items-center'>
                        <p className='text-black font-semibold text-lg'>Active:</p>
                        <p className='px-2'>{user.isActive ? 'TRUE' : 'FALSE'}</p>
                    </span>
                </div>
                <div className='flex justify-center items-center py-4 mt-3'>
                    <Button color='light' className='mx-2' outline={false} onClick={onCloseEdit}>
                        Update
                    </Button>
                </div>
            </div>
        </>
    );
};

export default CardUser;
