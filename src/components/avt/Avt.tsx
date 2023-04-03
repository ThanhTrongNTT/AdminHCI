import React from 'react';
import { className } from '~/utils/className';

type AvtProps = {
    src: string;
    sx: string;
};
const Avt = ({ src, sx }: AvtProps) => {
    switch (sx) {
        case 'default':
            sx = 'w-8 h-8';
            break;
        default:
            break;
    }
    return (
        <img
            src={src}
            alt='avt'
            loading='lazy'
            className={className('rounded-full object-cover border border-black', sx)}
        />
    );
};

export default Avt;
