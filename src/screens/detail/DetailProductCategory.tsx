import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import Dropdown from '~/components/dropdown/Dropdown';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { className } from '~/utils/className';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '~/api/firebase/Firebase';

const schema = Yup.object({
    name: Yup.string().required('Please enter your Category Name!'),
    gender: Yup.string().required('Please choose your Gender!'),
});

type UpdateProductCategoryProps = {
    onSubmit: (id: string, values: any) => void;
    onCancel: () => void;
    category: any;
};
const DetailProductCategory = ({ onSubmit, onCancel, category }: UpdateProductCategoryProps) => {
    const [image, setImage] = useState<any>();
    const [url, setUrl] = useState('');
    const [name, setName] = useState(category.name);
    const [gender, setGender] = useState(category.gender);
    const [isUploaded, setIsUploaded] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleResetClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Đặt giá trị của phần tử input loại "file" thành chuỗi rỗng
        }
    };

    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    const resetForm = (data: any) => {
        reset({
            name: data.name,
        });
        setIsUploaded(false);
        setUploading(false);
        setIsSubmitted(false);
        setUrl('');
        setImage(null);
        handleResetClick();
    };
    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            const newImage = e.target.files[0];
            newImage['id'] = Math.random();
            setImage(newImage);
            setIsUploaded(true);
        }
    };
    const updateCategoryHandler = (values: any) => {
        const data = {
            ...values,
            media: {
                fileType: image.type,
                fileName: image.name,
                filePath: url,
            },
        };
        onSubmit(category.id, data);
        resetForm(data);
    };
    const uploadFirebase = () => {
        setUploading(!uploading);
        const promises: Array<any> = [];
        //eslint-disable-next-line array-callback-return
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
                    setUrl(url);
                });
            },
        );
        Promise.all(promises)
            .then(() => {
                toast.success('Upload success', {
                    autoClose: 500,
                });
                setUploading(false);
                setIsUploaded(false);
                setIsSubmitted(!isSubmitted);
            })
            .catch((err) => console.log(err));
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
        setValue('name', name);
        setValue('gender', gender);
    }, []);
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Update Category</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateCategoryHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Category Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Category Name'
                                    control={control}
                                    name='name'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <div className='flex flex-col flex-1'>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Gender:
                                </label>
                                <Dropdown
                                    control={control}
                                    setValue={setValue}
                                    dropdownLabel='Select Gender'
                                    name='gender'
                                    list={['FEMALE', 'MALE']}
                                    className={'col-span-3'}
                                />
                            </div>
                            <div className='text-left flex items-center'>
                                <input
                                    name='media'
                                    id='media'
                                    type='file'
                                    onChange={handleChange}
                                    ref={fileInputRef}
                                    className='w-2/4 px-4 py-2 rounded-lg border border-c6'
                                />
                                <Button
                                    outline={false}
                                    type='button'
                                    disabled={!isUploaded}
                                    onClick={uploadFirebase}
                                    className={className(
                                        'ml-4 h-12 w-[130px] rounded-md text-white font-semibold',
                                        'bg-gradient-to-br from-orange-500 to-pink-500',
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DetailProductCategory;
