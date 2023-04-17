import React from 'react';

type LoadingProps = {
    size: number;
};
const Loading = ({ size }: LoadingProps) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-slate-400 opacity-50'>
            <div style={{ width: `${size}px`, height: `${size}px` }} className='animate-spin'>
                <div className='h-full w-full border-4 border-t-purple-500 border-b-purple-700 rounded-[50%]'></div>
            </div>
        </div>
    );
};

export default Loading;
