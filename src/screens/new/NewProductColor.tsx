import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import { SketchPicker } from 'react-color';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const schema = Yup.object({
    colorName: Yup.string().required('Please enter your Color Name!'),
});

type NewProductColorProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
};

const NewProductColor = ({ onSubmit, onCancel }: NewProductColorProps) => {
    const [colorValue, setColorValue] = useState('#ffffff');
    const [state, setState] = useState({
        background: '#ffffff',
    });

    const handleChangeComplete = (color: any) => {
        setState({ background: color.hex });
        setColorValue(color.hex);
    };
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            colorName: '',
        });
    };
    const newColorHandler = (values: any) => {
        values.colorValue = colorValue;
        onSubmit(values);
        resetForm();
        setState({ background: '#ffffff' });
        setColorValue('#ffffff');
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
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Color</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(newColorHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex text-left'>
                                    Color Name<p className='text-red-700 ml-1'>*</p>:
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
                                        className='font-bold flex flex-1 text-left col-span-1'
                                    >
                                        Color Value<p className='text-red-700 ml-1'>*</p>:
                                    </label>
                                    <div className='flex gap-5'>
                                        <SketchPicker
                                            color={state.background}
                                            onChangeComplete={handleChangeComplete}
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
