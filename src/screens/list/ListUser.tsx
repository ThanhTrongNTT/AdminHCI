import { Button, Modal, Pagination } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewUser from '../new/NewUser';

function ListUser() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onClose = () => {
        setIsModal(!isModal);
    };
    const onSubmit = () => {
        setIsModal(!isModal);
    };
    return (
        <div className='p-2'>
            <div className='bg-white'>
                <Modal show={isModal} size='7xl' position='center' popup={true} onClose={onClose}>
                    <Modal.Header className='bg-white' />
                    <Modal.Body className='bg-white'>
                        <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
                            {' '}
                            <NewUser />
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='bg-white rounded-b'>
                        <div className='flex justify-center gap-4'>
                            <Button color='success' onClick={onSubmit}>
                                Yes, I'm sure
                            </Button>
                            <Button color='failure' onClick={onClose}>
                                No, cancel
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
            <Button
                color='gray'
                className='rounded-2xl mx-8 border px-2 m-4'
                onClick={() => setIsModal(!isModal)}
            >
                Click Me 2
            </Button>
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
            <div className='flex items-center justify-center text-center'>
                <Pagination
                    showIcons={true}
                    currentPage={currentPage}
                    totalPages={3}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}

export default ListUser;
