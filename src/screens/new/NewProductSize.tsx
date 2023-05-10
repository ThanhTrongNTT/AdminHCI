import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schame = Yup.object({
    sizeName: Yup.string().required('Please enter your Size Name!').max(4),
    heightValue: Yup.string().required('Please enter your Heeight Value!'),
    weightValue: Yup.string().required('Please enter your Weight Value!'),
});

type NewProductSizeProps = {
    onSubmit: () => void;
    onCancel: () => void;
};
const NewProductSize = ({ onSubmit, onCancel }: NewProductSizeProps) => {
    const {
        handleSubmit,
        control,
        // setValue,
        reset,
        // formState: { isSubmitSuccessful },
    } = useForm({ resolver: yupResolver(schame), mode: 'onSubmit' });
    const resetForm = () => {
        reset({
            sizeName: '',
            heightValue: '',
            weightValue: '',
        });
    };
    return (
        <>
            <div className='p-2'>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product Size</h1>
                <div className='w-full p-2 bg-white rounded-xl overflow-y-auto h-[450px]'>
                    <form
                        onSubmit={() => {
                            handleSubmit(onSubmit);
                            resetForm();
                        }}
                    >
                        <div className='flex flex-col gap-4'>
                            <WrapperField>
                                <label htmlFor='' className='font-bold text-left'>
                                    Size Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Size Name'
                                    control={control}
                                    name='sizeName'
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
                                    name='heightValue'
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
                                    name='weightValue'
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

export default NewProductSize;
