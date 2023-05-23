import React, { useEffect, useState } from 'react';
import CardSubproduct from '~/components/card/CardSubproduct';
type DetailProductOrderProps = {
    order: any;
};
const DetailProductOrder = ({ order }: DetailProductOrderProps) => {
    const [selectedOrder, setSelectedOrder] = useState(order);
    useEffect(() => {
        setSelectedOrder(order);
    }, [order]);
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Detail Order</h1>
                {/* Thông tin cơ bản của Order */}
                <div className='grid grid-cols-2'>
                    <div className='border border-gray-c5 flex flex-col m-2'>
                        <h1 className='font-semibold text-xl text-center'>User</h1>
                        <span className='flex flex-row mx-5 px-5'>
                            <p className='font-semibold flex flex-1'>User Name:</p>{' '}
                            {selectedOrder?.user?.fullName}
                        </span>
                        <span className='flex flex-row mx-5 px-5'>
                            <p className='font-semibold flex flex-1'>User Email:</p>{' '}
                            {selectedOrder?.user?.email}
                        </span>
                    </div>
                    <div className='border border-gray-c5 flex flex-col m-2'>
                        <h1 className='font-semibold  text-xl text-center'>Shipping Info</h1>
                        <span className='flex flex-row mx-5 px-5'>
                            <p className='font-semibold flex flex-1'>Address:</p>{' '}
                            {selectedOrder?.shippingLocation}
                        </span>
                        <span className='flex flex-row mx-5 px-5'>
                            <p className='font-semibold flex flex-1'>Shipping Status:</p>{' '}
                            {selectedOrder?.shippingStatus}
                        </span>
                    </div>
                </div>
                <div className='border border-gray-c5 flex flex-col m-2'>
                    <h1 className='font-semibold  text-xl text-center'>Payment</h1>
                    <span className='flex flex-row mx-5 px-5'>
                        <p className='font-semibold flex flex-1'>Payment Method:</p>{' '}
                        {selectedOrder?.paymentMethod}
                    </span>
                    <span className='flex flex-row mx-5 px-5'>
                        <p className='font-semibold flex flex-1'>Total:</p>
                        {selectedOrder?.value?.toLocaleString('vi', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </span>
                </div>
                {/* Thông tin của từng subProduct */}
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>Products</h1>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        {selectedOrder?.orderDetail?.map((subProduct: any, index: number) => (
                            <CardSubproduct subProduct={subProduct} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailProductOrder;
