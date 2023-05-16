import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import { SketchPicker } from 'react-color';
import { Button } from 'flowbite-react';

const schema = Yup.object({
    colorName: Yup.string().required('Please enter your Color Name!'),
});

type UpdateProductColorProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
    color: any;
};

const DetailProductColor = ({ onSubmit, onCancel, color }: UpdateProductColorProps) => {
    const [colorValue, setColorValue] = useState(color.colorValue);
    const [state, setState] = useState({
        background: color.colorValue,
    });
    const [colorName, setColorName] = useState(color.colorName);

    const handleChangeComplete = (colorValue: any) => {
        setState({ background: colorValue.hex });
        setColorValue(colorValue.hex);
    };
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            colorName: '',
        });
    };
    const updateColorHandler = (values: any) => {
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
    useEffect(() => {
        setValue('colorName', colorName);
    }, []);

    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>
                    Update Product Color {color.colorName}
                </h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateColorHandler)}>
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

export default DetailProductColor;
