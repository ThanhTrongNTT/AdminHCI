import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import DetailProductCategory from '~/screens/detail/DetailProductCategory';

type CardCategoryProps = {
    onHandleDelete: (id: string) => void;
    onHandleSubmitUpdate: (id: string, values: any) => void;
    selectedCategory: any;
};

const CardCategory = ({
    onHandleDelete,
    onHandleSubmitUpdate,
    selectedCategory,
}: CardCategoryProps) => {
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };
    const onSubmitUpdate = (id: string, values: any) => {
        onHandleSubmitUpdate(id, values);
        setModalUpdate(!modalUpdate);
    };
    const handleDelete = () => {
        onHandleDelete(selectedCategory.id);
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
                    <DetailProductCategory
                        onCancel={onCloseUpdate}
                        onSubmit={onSubmitUpdate}
                        category={selectedCategory}
                    />
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
                            <h1 className='text-2xl font-bold p-3'>Delete Category</h1>
                            <span>
                                <h1>
                                    Do you want delete category with name: {selectedCategory.name}
                                </h1>{' '}
                            </span>

                            <div className='flex items-center justify-center gap-20 mt-10'>
                                <Button color='success' onClick={handleDelete}>
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
            <div className='w-[350px] shadow-xl bg-white m-2 rounded-2xl'>
                <img
                    className='h-[300px] w-full rounded-t-2xl'
                    src={
                        selectedCategory.mediaLink === 'https://google.com' ||
                        selectedCategory.mediaLink === null
                            ? 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            : selectedCategory.mediaLink
                    }
                    alt=''
                />
                <div className='flex flex-col mt-3'>
                    <p className='bg-gray-c3 rounded-2xl px-2 mx-auto text-center'>
                        ID: {selectedCategory.id}
                    </p>
                    <div className='ml-5'>
                        <p className='text-black font-semibold text-lg'>
                            Category Name: {selectedCategory.name}
                        </p>
                        <p className=''>Gender: {selectedCategory.gender}</p>
                        <p className=''>
                            Deleted: {selectedCategory.isDelete.toString().toUpperCase()}
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center py-4 mt-3 flex-col'>
                    <div className='flex'>
                        <Button color='light' className='mx-2' onClick={onCloseUpdate}>
                            Update
                        </Button>
                        <Button color='failure' className='mx-2' onClick={onCancelDelete}>
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardCategory;
