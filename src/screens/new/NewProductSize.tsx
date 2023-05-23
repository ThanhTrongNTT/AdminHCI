import { Button } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const schema = Yup.object({
    sizeName: Yup.string().required('Please enter your Size Name!').max(4),
    height: Yup.string().required('Please enter your Height Value!'),
    weight: Yup.string().required('Please enter your Weight Value!'),
});

type NewProductSizeProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
};
const NewProductSize = ({ onSubmit, onCancel }: NewProductSizeProps) => {
    const {
        handleSubmit,
        control,
        // setValue,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            sizeName: '',
            height: '',
            weight: '',
        });
    };
    const newSizeHandler = (values: any) => {
        onSubmit(values);
        resetForm();
    };
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0]?.message) {
                const message = arrErrors[0]?.message;
                toast.error(message.toString(), {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);
    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Size</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(newSizeHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex text-left'>
                                    Size Name<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter Size Name'
                                    control={control}
                                    name='sizeName'
                                    maxLenght='4'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label
                                    htmlFor=''
                                    className='font-bold flex flex-1 text-left col-span-1'
                                >
                                    Height Value<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter Height Value'
                                    control={control}
                                    name='height'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label
                                    htmlFor=''
                                    className='font-bold flex flex-1 text-left col-span-1'
                                >
                                    Weight Value<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter Weight Value'
                                    control={control}
                                    name='weight'
                                    className='col-span-3'
                                />
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

export default NewProductSize;
