import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import { className } from '~/utils/className';

const schema = Yup.object({
    name: Yup.string().required('Please enter your Sale Name!'),
    description: Yup.string().required('Please enter your Description!'),
    numberProduct: Yup.number().required('Please enter number of product!').max(100),
    type: Yup.string().required('Please choose your type of sale!'),
    percent: Yup.number().notRequired().max(100),
    value: Yup.number().notRequired(),
});

type NewProductSaleProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
};

const NewProductSale = ({ onSubmit, onCancel }: NewProductSaleProps) => {
    const [isPercent, setIsPercent] = useState(true);
    const [isCurrency, setIsCurrency] = useState(true);
    const [selectedValue, setSelectedValue] = useState('Select type of sale');
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            name: '',
            description: '',
            percent: '',
            numberProduct: '',
            type: '',
        });
        setIsPercent(true);
        setIsCurrency(true);
        setSelectedValue('Select type of sale');
    };
    const handleGetValue = (e: any) => {
        setSelectedValue(e.target.value);
        if (e.target.value === 'Percent') {
            setValue('type', 'Percent');
            setIsCurrency(true);
            setIsPercent(false);
            setValue('value', 0);
        } else if (e.target.value === 'Currency') {
            setValue('type', 'Currency');
            setIsCurrency(false);
            setIsPercent(true);
            setValue('percent', 0);
        }
    };
    const newSaleHandler = (values: any) => {
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
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Sale</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(newSaleHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Sale Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Sale Name'
                                    control={control}
                                    name='name'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Description:
                                </label>
                                <InputDefault
                                    placeholder='Enter Description'
                                    control={control}
                                    name='description'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Number Of Product:
                                </label>
                                <InputDefault
                                    placeholder='Enter Number of Product'
                                    control={control}
                                    name='numberProduct'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Type:
                                </label>
                                <select
                                    value={selectedValue}
                                    onChange={handleGetValue}
                                    className={className(
                                        'px-5 py-3 rounded-md border border-c6 col-span-3',
                                    )}
                                >
                                    <option value={'Select type of sale'} disabled>
                                        {'Select type of sale'}
                                    </option>
                                    <option data-value='Percent'>Percent</option>
                                    <option data-value='Currency'>Currency</option>
                                </select>
                            </WrapperField>
                            <WrapperField>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Percent:
                                    </label>
                                    <InputDefault
                                        disabled={isPercent}
                                        placeholder='Enter Percent'
                                        control={control}
                                        name='percent'
                                        className='col-span-3'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Value:
                                    </label>
                                    <InputDefault
                                        disabled={isCurrency}
                                        placeholder='Enter Value'
                                        control={control}
                                        name='value'
                                        className='col-span-3'
                                    />
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

export default NewProductSale;
