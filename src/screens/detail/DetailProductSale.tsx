import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import { className } from '~/utils/className';
import { Button } from 'flowbite-react';

const schema = Yup.object({
    name: Yup.string().required('Please enter your Sale Name!'),
    description: Yup.string().required('Please enter your Description!'),
    numberProduct: Yup.number().required('Please enter number of product!').max(100),
    type: Yup.string().required('Please choose your type of sale!'),
    percent: Yup.number().notRequired().max(100),
});

type UpdateProductSaleProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
    sale: any;
};

const DetailProductSale = ({ onSubmit, onCancel, sale }: UpdateProductSaleProps) => {
    // const [name, setName] = useState(sale?.name);
    // const [description, setDescription] = useState(sale?.description);
    // const [numberProduct, setNumberProduct] = useState(sale?.numberProduct);
    // const [type, setType] = useState(sale?.type);
    // const [percent, setPercent] = useState(sale?.percent);
    // const [currency, setCurrency] = useState(sale?.value);
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
    const resetForm = (values: any) => {
        reset({
            name: values.name,
            description: values.description,
            percent: values.percent,
            value: values.value,
            numberProduct: values.numberProduct,
            type: values.type,
        });
        setIsPercent(true);
        setIsCurrency(true);
        setSelectedValue(values.type);
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
    const updateSaleHandler = (values: any) => {
        onSubmit(values);
        resetForm(values);
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
        setValue('name', sale?.name);
        setValue('description', sale?.description);
        setValue('percent', sale?.percent);
        setValue('value', sale?.currency);
        setValue('numberProduct', sale?.numberProduct);
        setValue('type', sale?.type);
        setSelectedValue(sale?.type);
    }, [sale]);
    useEffect(() => {
        if (selectedValue === 'Percent') {
            setIsCurrency(true);
            setIsPercent(false);
        } else if (selectedValue === 'Currency') {
            setIsCurrency(false);
            setIsPercent(true);
        }
    }, [selectedValue]);

    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>Update Product Sale</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateSaleHandler)}>
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

export default DetailProductSale;
