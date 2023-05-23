import React from 'react';
import { useController } from 'react-hook-form';

const InputTextarea = ({ name, control, className, maxLenght, ...props }: any) => {
    const { field } = useController({
        name,
        control,
        defaultValue: '',
    });
    return (
        <div className={className}>
            <textarea
                className='px-5 rounded-md py-3 border border-c6 w-full disabled:opacity-80 disabled:bg-gray-c5 h-[150px]'
                {...field}
                {...props}
                maxLength={maxLenght ? maxLenght : '524288'}
            />
        </div>
    );
};

export default InputTextarea;
