import React from 'react';
type DetailProductOrderProps = {
    order: any;
};
const DetailProductOrder = ({ order }: DetailProductOrderProps) => {
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Detail Order</h1>
            </div>
        </>
    );
};

export default DetailProductOrder;
