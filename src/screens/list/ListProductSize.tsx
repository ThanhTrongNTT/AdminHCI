import React, { useEffect, useState } from 'react';
import { IconPlus } from '~/components/icon/Icon';
import NewProductSize from '../new/NewProductSize';
import { Button, Modal, Pagination } from 'flowbite-react';
import { productSizeApi } from '~/api/product.api';
import { toast } from 'react-toastify';
import { className } from '~/utils/className';
import DetailProductSize from '../detail/DetailProductSize';

const ListProductSize = () => {
    const [modalNew, setModalNew] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [isLoadData, setIsLoadData] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedSize, setSelectedSize] = useState({
        id: 1,
        sizeName: 'Medium',
        weight: '65-75kg',
        height: '1m60-1m75',
        isDelete: false,
    });
    const size = 5;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllSize(currentPage);
    };
    const getAllSize = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productSizeApi.getAllProductSize(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setSizes(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onSubmitNew = (values: any) => {
        console.log(values);
        //* Excute Logic create new Size
        productSizeApi.createProductSize(values).then((res: any) => {
            if (res.result) {
                toast.success(`Create Size ${res.result.sizeName} success!`);
                getAllSize(pageNumber);
            } else {
                toast.error(res.message);
            }
        });
        setModalNew(!modalNew);
    };
    const onCloseUpdate = async (size?: any) => {
        if (size) {
            await setSelectedSize(size);
        }
        setModalUpdate(!modalUpdate);
    };
    const updateColorHandle = (values: any) => {
        //* Excute Logic about update Size
        productSizeApi.updateProductSize(selectedSize.id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Size success!');
                getAllSize(pageNumber);
            }
            setModalUpdate(!modalUpdate);
        });
        console.log(values);
    };
    const handleDeleteSize = () => {
        //* Excute Logic avout delete Size
        productSizeApi.deleteProductSize(selectedSize.id).then((res: any) => {
            if (res.result === null) {
                toast.error('Delete Size unsuccess!');
            } else {
                toast.success('Delete Size Success!');
                getAllSize(pageNumber);
            }
            setModalDelete(!modalDelete);
        });
    };
    const onCloseDelete = (size?: any) => {
        if (size) {
            setSelectedSize(size);
        }
        setModalDelete(!modalDelete);
    };
    useEffect(() => {
        getAllSize(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal show={modalNew} size='7xl' position='center' popup={true} onClose={onCloseNew}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProductSize onSubmit={onSubmitNew} onCancel={onCloseNew} />
                </Modal.Body>
            </Modal>
            {modalUpdate ? (
                <Modal
                    show={modalUpdate}
                    size='7xl'
                    position='center'
                    popup={true}
                    onClose={onCloseUpdate}
                >
                    <Modal.Header className='bg-white' />
                    <Modal.Body className='bg-white'>
                        <DetailProductSize
                            onSubmit={updateColorHandle}
                            onCancel={onCloseUpdate}
                            size={selectedSize}
                        />
                    </Modal.Body>
                </Modal>
            ) : (
                ''
            )}
            <Modal
                show={modalDelete}
                size='2xl'
                position='center'
                popup={true}
                onClose={onCloseDelete}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <div>
                        <span className='flex justify-center items-center font-semibold text-xl p-4'>
                            Do you want to delete Color with name: {selectedSize.sizeName}?
                        </span>
                        <div className='flex justify-center gap-4 p-5'>
                            <Button color='success' onClick={handleDeleteSize}>
                                Yes, I'm sure
                            </Button>
                            <Button color='failure' onClick={onCloseDelete}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Size
                </span>
            </button>
            <div className='overflow-x-auto rounded-2xl border mx-4 border-gray-c4'>
                <table className='bg-white  w-full text-sm text-left text-gray-400'>
                    <thead>
                        <tr>
                            <th scope='col' className='py-3 px-6'>
                                Size Name
                            </th>
                            <th scope='col' className='px-6'>
                                Height
                            </th>
                            <th scope='col' className='px-6'>
                                Weight
                            </th>
                            <th scope='col' className='px-6'>
                                Deleted
                            </th>
                            <th scope='col' className='px-6'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sizes.map((size: any, index) => (
                            <tr className='bg-white hover:bg-gray-c2 cursor-pointer' key={index}>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {size.sizeName}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {size.height}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {size.weight}
                                </th>
                                <th
                                    scope='row'
                                    className={className(
                                        'py-4 px-6 font-medium whitespace-nowrap',
                                        size.isDelete ? 'text-success' : ' text-warning',
                                    )}
                                >
                                    {size.isDelete.toString().toUpperCase()}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    <div className='flex items-center gap-5'>
                                        <div>
                                            <span
                                                className='text-white hover:bg-gray-c3 bg-success  rounded-lg px-2'
                                                onClick={() => onCloseUpdate(size)}
                                            >
                                                Update
                                            </span>
                                        </div>
                                        <span
                                            className='text-white bg-warning rounded-lg px-2 hover:bg-gray-c4'
                                            onClick={() => onCloseDelete(size)}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center'>
                <Pagination
                    showIcons={true}
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    );
};

export default ListProductSize;
