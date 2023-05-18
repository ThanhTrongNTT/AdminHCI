import React from 'react';
import { useController } from 'react-hook-form';

const InputFile = ({ name, control, className, maxLenght, handleChange, ...props }: any) => {
    const { field } = useController({
        name,
        control,
    });
    return (
        <input
            type='file'
            multiple
            defaultValue={''}
            {...field}
            {...props}
            onChange={handleChange}
            className='w-2/4 px-4 py-2 rounded-lg border border-c6'
        />
    );
};

export default InputFile;
