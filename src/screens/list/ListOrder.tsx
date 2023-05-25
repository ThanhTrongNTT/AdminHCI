import { Modal, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import orderApi from '~/api/order.api';
import { IconDelete, IconDetail } from '~/components/icon/Icon';
import DetailProductOrder from '../detail/DetailProductOrder';

const ListOrder = () => {
    const [orders, setOrders] = useState([]);
    const [modalDetail, setModalDetail] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [orderCurrent, setOrderCurrent] = useState<any>();
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 10;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllOrder(currentPage);
    };
    const getAllOrder = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        orderApi.getAllOrder(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setOrders(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseDetail = async (order?: any) => {
        if (order) {
            await setOrderCurrent(order);
        }
        setModalDetail(!modalDetail);
    };
    const onCloseDelete = async (order?: any) => {
        if (order) {
            await setOrderCurrent(order);
        }
        setModalDelete(!modalDelete);
    };
    const onhandleDelete = () => {
        setModalDelete(!modalDelete);
    };
    useEffect(() => {
        getAllOrder(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal
                show={modalDetail}
                size='7xl'
                position='center'
                popup={true}
                onClose={onCloseDetail}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <DetailProductOrder order={orderCurrent} />
                </Modal.Body>
            </Modal>
            <div className='overflow-x-auto rounded-2xl mt-[73px] mx-4 border border-gray-c4'>
                <table className='bg-white  w-[100%] text-sm text-left text-gray-400'>
                    <thead>
                        <tr className='border-b border-gray-c2'>
                            <th scope='col' className='py-3 px-6'>
                                Customer
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Total
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Shipping Location
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Shipping Status
                            </th>
                            <th scope='col' className='py-3 px-6'>
                                Payment Status
                            </th>
                            <th scope='col' className='py-3 px-6 text-center'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order: any, index) => (
                            <tr className='bg-white hover:bg-gray-c2 cursor-pointer' key={index}>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {order.user?.fullName}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {order.value.toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {order.shippingLocation}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {order.shippingStatus}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    {order.paymentMethod}
                                </th>
                                <th
                                    scope='row'
                                    className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                >
                                    <div className='text-center'>
                                        <span
                                            className='text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2'
                                            onClick={() => onCloseDetail(order)}
                                        >
                                            Detail
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

export default ListOrder;
