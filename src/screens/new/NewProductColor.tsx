import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';

type NewProductColorProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
};

const NewProductColor = ({ onSubmit, onCancel }: NewProductColorProps) => {
    const [colorValue, setColorValue] = useState('');
    const {
        handleSubmit,
        control,
        // setValue,
        reset,
        // formState: { isSubmitSuccessful },
    } = useForm();
    const resetForm = () => {
        reset({
            colorName: '',
            colorValue: '',
        });
    };
    const newColorHandler = (values: any) => {
        onSubmit(values);
        resetForm();
    };
    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Color</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(newColorHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Color Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Color Name'
                                    control={control}
                                    name='colorName'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Color Value:
                                    </label>
                                    <div className='flex gap-5'>
                                        <InputDefault
                                            placeholder='Enter Color Value'
                                            control={control}
                                            name='colorValue'
                                            maxLenght='7'
                                            className='w-[80%] flex gap-5'
                                        />
                                    </div>
                                </div>
                            </WrapperField>
                        </div>
                        <div className='flex justify-center gap-4 p-5'>
                            <Button color='success' type='submit'>
                                Yes, I'm sure
                            </Button>
                            <Button color='failure' onClick={onCancel}>
                                No, cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewProductColor;
