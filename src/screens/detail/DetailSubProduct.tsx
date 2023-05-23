import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { productColorApi, productSizeApi } from '~/api/product.api';
import WrapperField from '~/components/common/WrapperField';
import DropdownForColor from '~/components/dropdown/DropdownForColor';
import DropdownForSize from '~/components/dropdown/DropdownForSize';
import InputDefault from '~/components/input/InputDefault';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { className } from '~/utils/className';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '~/api/firebase/Firebase';
import { MediaDTO } from '~/data/Contanst';

const schema = Yup.object({
    price: Yup.number().required('Please enter your price!').min(1),
    quantity: Yup.number().required('Please enter your quantity!').min(1),
    colorId: Yup.number().required('Please choose your Color!'),
    sizeId: Yup.number().required('Please choose your Size!'),
});

type UpdateSubproductProps = {
    onSubmit: (id: string, values: any) => void;
    onCancel: () => void;
    onDelete: (subId: string) => void;
    subProduct: any;
};

const DetailSubProduct = ({ onSubmit, onCancel, onDelete, subProduct }: UpdateSubproductProps) => {
    const [isUploaded, setIsUploaded] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [images, setImages] = useState<Array<any>>([]);
    const [urls, setUrls] = useState<Array<string>>([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const data = { orders: [], filter: [], size: 200, totalElement: 0, pageNumber: 1 };
    const getAllSelection = () => {
        productColorApi.getAllProductColor(data).then((res: any) => {
            setColors(res.result.data);
        });
        productSizeApi.getAllProductSize(data).then((res: any) => {
            setSizes(res.result.data);
        });
    };
    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    // } = useForm();
    const resetForm = (values: any) => {
        reset({
            price: subProduct.price,
            quantity: subProduct.quantity,
        });
        setIsUploaded(false);
        setUploading(false);
        setIsSubmitted(false);
        setUrls([]);
        setImages([]);
    };
    //* Logic about firebase
    const handleChange = (e: any) => {
        if (e.target.files.length <= 4) {
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                newImage['id'] = Math.random();
                setImages((images) => [...images, newImage]);
            }
            setIsUploaded(true);
        } else {
            toast.error('You have to upload max is 4 images!');
        }
    };
    const uploadFirebase = () => {
        setUploading(!uploading);
        const promises: Array<any> = [];
        //eslint-disable-next-line array-callback-return
        images.map((image: any) => {
            const imageRef = ref(storage, `images/${image.name}`);
            const uploadTask = uploadBytesResumable(imageRef, image);
            promises.push(uploadTask);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Handle upload progress if needed
                },
                (error: any) => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                        setUrls((prev) => [...prev, url]);
                    });
                },
            );
        });
        Promise.all(promises)
            .then(() => {
                toast.success('Upload success', {
                    autoClose: 500,
                });
                setUploading(false);
                setIsUploaded(false);
                setIsSubmitted(!isSubmitted);
                const mediaInput = document.getElementById('media') as HTMLInputElement;
                mediaInput.value = '';
            })
            .catch((err) => console.log(err));
    };
    const updateHandler = (values: any) => {
        const medias: Array<MediaDTO> = [];
        // images.forEach((image, index) => {
        //     medias[index].fileName = image.name;
        //     medias[index].fileType = image.type;
        // });
        images.forEach((image, index) => {
            const obj = { fileType: image.type, fileName: image.name, filePath: '' };
            medias.push(obj);
        });
        urls.forEach((url, index) => {
            const obj = medias[index];
            obj.filePath = url;
        });
        const data = {
            ...values,
            medias: medias,
        };
        onSubmit(subProduct.id, values);
        resetForm(values);
    };
    const deletehandler = () => {
        onDelete(subProduct.id);
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
        setValue('price', subProduct.price);
        setValue('quantity', subProduct.quantity);
    }, []);
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Subproduct</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex text-left'>
                                    Price<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter Price'
                                    control={control}
                                    name='price'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label
                                    htmlFor=''
                                    className='font-bold flex flex-1 text-left col-span-1'
                                >
                                    Quantity<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter Quantity'
                                    control={control}
                                    name='quantity'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <div className='flex gap-5'>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex flex-1 text-left col-span-1'
                                    >
                                        Color<p className='text-red-700 ml-1'>*</p>:
                                    </label>
                                    <DropdownForColor
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel='Select Color'
                                        name='colorId'
                                        list={colors}
                                        selected={subProduct.color.colorName}
                                        className={'col-span-3'}
                                    />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <label
                                        htmlFor=''
                                        className='font-bold flex flex-1 text-left col-span-1'
                                    >
                                        Size<p className='text-red-700 ml-1'>*</p>:
                                    </label>
                                    <DropdownForSize
                                        control={control}
                                        setValue={setValue}
                                        dropdownLabel='Select Size'
                                        name='sizeId'
                                        list={sizes}
                                        selected={subProduct.size.sizeName}
                                        className={'col-span-3'}
                                    />
                                </div>
                            </div>
                            <div className='text-left flex items-center'>
                                <input
                                    type='file'
                                    name='media'
                                    id='media'
                                    multiple
                                    onChange={handleChange}
                                    className='w-2/4 px-4 py-2 rounded-lg border border-c6'
                                />
                                <Button
                                    outline={false}
                                    type='button'
                                    disabled={!isUploaded}
                                    onClick={uploadFirebase}
                                    className={className(
                                        'ml-4 h-12 w-[130px] rounded-md text-white font-semibold bg-gradient-to-br from-orange-500 to-pink-500',
                                    )}
                                >
                                    {!uploading ? (
                                        'Upload'
                                    ) : (
                                        <div className='flex items-center justify-center'>
                                            <div className='w-7 h-7 bg-transparent border-[3px] border-t-[3px] border-t-transparent animate-spin border-white rounded-full'></div>
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div className='flex justify-center gap-4 p-5'>
                            <Button color='success' type='submit' disabled={!isSubmitted}>
                                Yes, I'm sure
                            </Button>
                            <Button color='failure' onClick={onCancel}>
                                No, cancel
                            </Button>
                            <Button color='failure' onClick={deletehandler}>
                                Delete
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DetailSubProduct;
