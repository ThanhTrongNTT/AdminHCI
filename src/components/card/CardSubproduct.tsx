import React, { useEffect, useState } from 'react';

type CardSubproductProps = {
    subProduct: any;
};
const CardSubproduct = ({ subProduct }: CardSubproductProps) => {
    const [product, setProduct] = useState(subProduct);
    useEffect(() => {
        setProduct(subProduct);
    }, [subProduct]);

    return (
        <>
            <div className='w-[350px] bg-white m-2 rounded-2xl'>
                <img
                    className='h-[250px] w-full object-cover rounded-t-2xl'
                    src={
                        product?.subProduct?.media[0]?.filePath === 'https://google.com' ||
                        product?.subProduct?.media[0]?.filePathk === null
                            ? 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            : product?.subProduct?.media[0]?.filePath
                    }
                    alt={product?.subProduct?.media[0]?.fileName}
                />
                <div className='flex flex-col mt-3'>
                    <div className='px-5'>
                        <p className='text-black font-semibold text-lg h-[56px]'>
                            Product Name: {product?.subProduct?.name}
                        </p>
                        <span className='flex'>
                            <p className='font-semibold'>Quantity:</p>
                            <p className='px-2 text-left'>{product?.quantity}</p>
                        </span>
                        <span className='flex'>
                            <p className='font-semibold'>Price:</p>
                            <p className='px-2 text-left'>
                                {product?.price.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSubproduct;
