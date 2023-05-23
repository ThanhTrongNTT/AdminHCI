import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Dropdown from '~/components/dropdown/Dropdown';
import { className } from '~/utils/className';

const schema = Yup.object({
    name: Yup.string().required('Please enter your User Name!'),
    email: Yup.string().required('Please enter your User Email!'),
    address: Yup.string().required('Please enter your User Address!'),
    phoneNumber: Yup.string().required('Please enter your User Phone Number!'),
    gender: Yup.string().required('Please choose your Gender!'),
});

type UpdateUserProps = {
    onSubmit: (values: any) => void;
    onCancel: () => void;
    user: any;
};

const DetailUser = ({ onSubmit, onCancel, user }: UpdateUserProps) => {
    const [selectedValue, setSelectedValue] = useState('Select Gender');
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
    // } = useForm();
    const resetForm = (data: any) => {
        reset({
            name: data.name,
            email: data.email,
            address: data.address,
            phoneNumber: data.phoneNumber,
            isActive: data.isActive,
            gender: data.gender,
        });
    };
    const updateCategoryHandler = (values: any) => {
        onSubmit(values);
        console.log(values);
        resetForm(values);
    };
    const handleGetValue = (e: any) => {
        setSelectedValue(e.target.value);
        setValue('gender', e.target.value);
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
        console.log(user);

        setValue('name', user.fullName);
        setValue('email', user.email);
        setValue('address', user.address);
        setValue('phoneNumber', user.phoneNumber ? user.phoneNumber : '');
        setValue('isActive', user.isActive);
        setValue('gender', user.gender);
        setSelectedValue(user.gender);
    }, []);
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Update User</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(updateCategoryHandler)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex text-left'>
                                    User Name<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter User Name'
                                    control={control}
                                    name='name'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex text-left'>
                                    User Email<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <InputDefault
                                    placeholder='Enter User Email'
                                    control={control}
                                    name='email'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    User Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter User Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    User Phone Number:
                                </label>
                                <InputDefault
                                    placeholder='Enter User Phone Number'
                                    control={control}
                                    name='phoneNumber'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <div className='flex flex-col flex-1'>
                                <label
                                    htmlFor=''
                                    className='font-bold flex flex-1 text-left col-span-1'
                                >
                                    Gender<p className='text-red-700 ml-1'>*</p>:
                                </label>
                                <select
                                    value={selectedValue}
                                    onChange={handleGetValue}
                                    className={className(
                                        'px-5 py-3 rounded-md border border-c6 col-span-3',
                                    )}
                                >
                                    <option value={'Select Gender'} disabled>
                                        {'Select Gender'}
                                    </option>
                                    <option data-value='Female'>Female</option>
                                    <option data-value='Male'>Male</option>
                                    <option data-value='Other'>Other</option>
                                </select>
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

export default DetailUser;
