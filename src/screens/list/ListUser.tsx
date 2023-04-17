import { Button, Modal, Pagination } from 'flowbite-react';
import { useState } from 'react';
import NewUser from '../new/NewUser';

function ListUser() {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalNew, setModalNew] = useState(false);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onCloseEdit = () => {
        setModalEdit(!modalEdit);
    };
    const onSubmitEdit = () => {
        setModalEdit(!modalEdit);
    };
    const onSubmitNew = ({ fullName, address, ...values }: any) => {
        const tour = {
            tourDetail: {
                fullName,
                address,
                ...values,
            },
        };
        console.log(tour);
        setModalNew(!modalNew);
    };

    return (
        <div className='p-2'>
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
                        <NewUser onSubmit={onSubmitNew} onCancel={onCloseNew} />
                    </Modal.Body>
                </Modal>
            </div>
            <div>
                <Modal
                    show={modalEdit}
                    size='7xl'
                    position='center'
                    popup={true}
                    onClose={onCloseEdit}
                >
                    <Modal.Header className='bg-white' />
                    <Modal.Body className='bg-white'>
                        <div>
                            <h1>Thành Trọng</h1>
                            <Button color='failure' onClick={onSubmitEdit}>
                                No, cancel
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <button
                color='white'
                className='rounded-2xl mx-8 border px-4 py-2 m-4 bg-white hover:bg-gray-c5'
                onClick={() => setModalNew(!modalNew)}
            >
                Click Me 2
            </button>
            <button
                color='white'
                className='rounded-2xl mx-8 border px-4 py-2 m-4 bg-white hover:bg-gray-c5'
                onClick={() => setModalEdit(!modalEdit)}
            >
                Click Edit
            </button>
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
                    currentPage={currentPage}
                    layout='pagination'
                    onPageChange={onPageChange}
                    showIcons={true}
                    totalPages={10}
                />
            </div>
        </div>
    );
}

export default ListUser;
