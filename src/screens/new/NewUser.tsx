import React from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import Dropdown from '~/components/dropdown/Dropdown';
import InputDefault from '~/components/input/InputDefault';

function NewUser() {
    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();
    const onSubmit = () => {
        console.log('Thanh Trong');
    };
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create Permission For User</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Full Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Full Name'
                                    control={control}
                                    name='fullName'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Address:
                                </label>
                                <InputDefault
                                    placeholder='Enter Address'
                                    control={control}
                                    name='address'
                                    className='col-span-3'
                                />
                            </WrapperField>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewUser;
