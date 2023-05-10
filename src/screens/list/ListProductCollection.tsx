import React from 'react';
import Cardproduct from '~/components/card/Cardproduct';
import { IconPlus } from '~/components/icon/Icon';

const ListProductCollection = () => {
    return (
        <>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                // onClick={() => setModalEdit(!modalEdit)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Collection
                </span>
            </button>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <Cardproduct />
            </div>
        </>
    );
};

export default ListProductCollection;
