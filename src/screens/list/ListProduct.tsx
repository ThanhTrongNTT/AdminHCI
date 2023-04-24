import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import NewProduct from '../new/NewProduct';

function ListProduct() {
    const [modalEdit, setModalEdit] = useState(false);
    const onCloseEdit = () => {
        setModalEdit(!modalEdit);
    };
    return (
        <>
            <button
                color='white'
                className='rounded-2xl mx-8 border px-4 py-2 m-4 bg-white hover:bg-gray-c5'
                onClick={() => setModalEdit(!modalEdit)}
            >
                Click Edit
            </button>
            <div className='overflow-x-auto rounded-2xl mx-8 border border-gray-c4'>
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
                            <NewProduct onSubmit={() => {}} onCancel={onCloseEdit} />
                        </Modal.Body>
                    </Modal>
                </div>

                <table className='bg-white  w-[100%] text-sm text-left text-gray-400'>
                    <thead>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Image
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Product Name
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Title
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Subtitle
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Sizes
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
}

export default ListProduct;
