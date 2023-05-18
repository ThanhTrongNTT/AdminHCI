import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const schema = Yup.object({
    sizeName: Yup.string().required('Please enter your Size Name!').max(4),
    height: Yup.string().required('Please enter your Height Value!'),
    weight: Yup.string().required('Please enter your Weight Value!'),
});
type UpdateProductSizeProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
    size: any;
};

const DetailProductSize = ({ onSubmit, onCancel, size }: UpdateProductSizeProps) => {
    const [sizeName, setSizeName] = useState(size.sizeName);
    const [height, setHeight] = useState(size.height);
    const [weight, setWeight] = useState(size.weight);
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            sizeName: '',
            height: '',
            weight: '',
        });
    };
    const updateSizeHandler = (values: any) => {
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
    useEffect(() => {
        setValue('sizeName', sizeName);
        setValue('height', height);
        setValue('weight', weight);
    }, []);
    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Size</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateSizeHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Size Name:
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
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Height Value:
                                </label>
                                <InputDefault
                                    placeholder='Enter Height Value'
                                    control={control}
                                    name='height'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Weight Value:
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

export default DetailProductSize;
