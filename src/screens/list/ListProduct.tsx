import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import NewProduct from '../new/NewProduct';
import { IconPlus } from '~/components/icon/Icon';
import Cardproduct from '~/components/card/Cardproduct';

function ListProduct() {
    const [modalEdit, setModalEdit] = useState(false);
    const onCloseEdit = () => {
        setModalEdit(!modalEdit);
    };
    return (
        <>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalEdit(!modalEdit)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product
                </span>
            </button>
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
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <Cardproduct />
            </div>
        </>
    );
}

export default ListProduct;
