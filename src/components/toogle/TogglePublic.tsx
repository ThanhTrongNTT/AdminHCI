import { type } from 'os';
import React from 'react';

type TogglePublicProps = {
    product: any;
};

const TogglePublic = ({ product }: TogglePublicProps) => {
    const handleChange = (e: any) => {
        console.log(e.target.checked.toString());
    };
    return (
        <>
            <div className='py-4'>
                <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                        type='checkbox'
                        value=''
                        checked={product.isPublic}
                        className='sr-only peer'
                        onChange={handleChange}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
                    <span className='ml-3 text-sm font-medium'>Public</span>
                </label>
            </div>
        </>
    );
};

export default TogglePublic;
