import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { productCategoryApi, productCollectionApi, productStyleApi } from '~/api/product.api';
import WrapperField from '~/components/common/WrapperField';
import DropdownForProduct from '~/components/dropdown/DropdownForProduct';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Dropdown from '~/components/dropdown/Dropdown';

const schema = Yup.object({
    name: Yup.string().required('Please enter your Product Name!'),
    description: Yup.string().required('Please enter your Description!'),
    categoryId: Yup.string().required('Please choose Category!'),
    collectionId: Yup.string().required('Please choose Collection!'),
    form: Yup.string().required('Please choose Form!'),
    material: Yup.string().required('Please choose Material!'),
    styleId: Yup.string().required('Please choose Style!'),
});

type UpdateProductryProps = {
    onSubmit: (id: string, values: any) => void;
    onCancel: () => void;
    product: any;
};

const DetailProduct = ({ onSubmit, onCancel, product }: UpdateProductryProps) => {
    const [styles, setStyles] = useState<string[]>([]);
    const [collections, setCollections] = useState<string[]>([]);
    const [categoreis, setCategoreis] = useState<string[]>([]);
    const materials = ['Cotton', 'Cotton Cao Cấp', 'Vải thường'];
    const forms = ['Unisex', 'Sweater', 'Hoodie'];
    const data = { orders: [], filter: [], size: 200, totalElement: 0, pageNumber: 1 };
    const getAllSelection = () => {
        productCollectionApi.getAllProductCollection(data).then((res: any) => {
            console.log('collection: ', res);
            setCollections(res.result.data);
        });
        productCategoryApi.getAllProductCategory(data).then((res: any) => {
            console.log('category: ', res);
            setCategoreis(res.result.data);
        });
        productStyleApi.getAllProductStyle(data).then((res: any) => {
            console.log('style: ', res);
            setStyles(res.result.data);
        });
    };
    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = (values: any) => {
        reset({
            name: values.name,
            description: values.description,
            categoryId: '',
            collectionId: '',
            styleId: '',
            form: values.form,
            material: values.material,
        });
    };
    const updateHandler = (values: any) => {
        onSubmit(product.id, values);
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
        getAllSelection();
    }, []);
    useEffect(() => {
        setValue('name', product.name);
        setValue('description', product.description);
        setValue('form', product.form);
    }, []);
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Update Product</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Product Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Product Name'
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
                            <div className='flex gap-5'>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Category:
                                    </label>
                                    <DropdownForProduct
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel={product.category.name}
                                        name='categoryId'
                                        list={categoreis}
                                        className={'col-span-3'}
                                    />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Collection:
                                    </label>
                                    <DropdownForProduct
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel={product.collection.name}
                                        name='collectionId'
                                        list={collections}
                                        className={'col-span-3'}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Form:
                                    </label>
                                    <Dropdown
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel={product.form}
                                        name='form'
                                        list={forms}
                                        className={'col-span-3'}
                                    />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Material:
                                    </label>
                                    <Dropdown
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel={product.material}
                                        name='material'
                                        list={materials}
                                        className={'col-span-3'}
                                    />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex-1 text-left col-span-1'
                                    >
                                        Style:
                                    </label>
                                    <DropdownForProduct
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel={product.style.name}
                                        name='styleId'
                                        list={styles}
                                        className={'col-span-3'}
                                    />
                                </div>
                            </div>
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

export default DetailProduct;
