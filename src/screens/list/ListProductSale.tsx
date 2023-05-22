import { Button, Modal, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { productSaleApi } from '~/api/product.api';
import { IconPlus } from '~/components/icon/Icon';
import NewProductSale from '../new/NewProductSale';
import { toast } from 'react-toastify';
import DetailProductSale from '../detail/DetailProductSale';

const ListProductSale = () => {
    const [sales, setSales] = useState([]);
    const [modalNew, setModalNew] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalAddProductInSale, setModalAddProductInSale] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [saleCurrent, setSaleCurrent] = useState<any>();
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 10;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllSale(currentPage);
    };
    const getAllSale = (currentPage: number) => {
        setIsLoadData(false);
        const orders: any[] = [
            {
                props: 'type',
                sortDir: 'asc',
            },
        ];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productSaleApi.getAllProductSale(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setSales(res.result.data);
            setIsLoadData(true);
        });
    };
    const newSaleHandler = (values: any) => {
        productSaleApi.createProductSale(values).then((res: any) => {
            if (res.result) {
                toast.success(`Create Sale ${res.result.name} success!`);
                getAllSale(pageNumber);
            } else {
                toast.error(res.message);
            }
        });
        setModalNew(!modalNew);
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onCloseUpdate = (sale?: any) => {
        if (sale) {
            setSaleCurrent(sale);
        }
        setModalUpdate(!modalUpdate);
    };
    const updateSaleHandle = (values: any) => {
        productSaleApi.updateProductSale(saleCurrent.id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
                getAllSale(pageNumber);
            } else {
                toast.success('Update Color success!');
                getAllSale(pageNumber);
            }
            setModalUpdate(!modalUpdate);
        });
    };
    const handleDeleteColor = () => {
        productSaleApi.deleteProductSale(saleCurrent.id).then((res: any) => {
            if (res.result === null) {
                toast.error('Delete Sale unsuccess!');
                getAllSale(pageNumber);
            } else {
                toast.success('Delete Sale Success!');
                getAllSale(pageNumber);
            }
            setModalDelete(!modalDelete);
        });
    };
    const onCloseDelete = (sale?: any) => {
        if (sale) {
            setSaleCurrent(sale);
        }
        setModalDelete(!modalDelete);
    };
    useEffect(() => {
        getAllSale(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal show={modalNew} size='7xl' position='center' popup={true} onClose={onCloseNew}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProductSale onSubmit={newSaleHandler} onCancel={onCloseNew} />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalUpdate}
                size='7xl'
                position='center'
                popup={true}
                onClose={onCloseUpdate}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <DetailProductSale
                        onSubmit={updateSaleHandle}
                        onCancel={onCloseUpdate}
                        sale={saleCurrent}
                    />
                </Modal.Body>
            </Modal>
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
                            Do you want to delete Color with name: {saleCurrent?.name}?
                        </span>
                        <div className='flex justify-center gap-4 p-5'>
                            <Button color='success' onClick={handleDeleteColor}>
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
                    <IconPlus /> Create New Product Sale
                </span>
            </button>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalAddProductInSale(!modalAddProductInSale)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Add Product In Sale
                </span>
            </button>
            <div className='overflow-x-auto rounded-2xl mx-4 border border-gray-c4'>
                <table className='bg-white  w-[100%] text-sm text-left text-gray-400'>
                    <thead>
                        <tr className='border-b border-gray-c2'>
                            <th scope='col' className='py-3 px-6'>
                                Sale Name
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Description
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Products
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Type
                            </th>
                            <th scope='col' className='py-3 px-6 text-center'>
                                Value
                            </th>
                            <th scope='col' className='py-3 px-6 text-center'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale: any, index) => (
                            <tr className='bg-white hover:bg-gray-c2 cursor-pointer' key={index}>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {sale.name}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {sale.description}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {sale.numberProduct}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {sale.type}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap text-center'
                                >
                                    {sale.type === 'Percent'
                                        ? sale.percent + '%'
                                        : '- ' +
                                          sale.value.toLocaleString('vi', {
                                              style: 'currency',
                                              currency: 'VND',
                                          })}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    <div className='text-center'>
                                        <span
                                            className='text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2'
                                            onClick={() => onCloseUpdate(sale)}
                                        >
                                            Update
                                        </span>
                                        <span
                                            className='text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2'
                                            onClick={() => onCloseDelete(sale)}
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

export default ListProductSale;
