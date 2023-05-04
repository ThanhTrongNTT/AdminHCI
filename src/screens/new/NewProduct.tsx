import { Button } from 'flowbite-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import WrapperField from '~/components/common/WrapperField';
import InputDefault from '~/components/input/InputDefault';
import { className } from '~/utils/className';

type NewProductProps = {
    onSubmit: ({ fullName, address, ...values }: any) => void;
    onCancel: () => void;
};

const NewProduct = ({ onSubmit, onCancel }: NewProductProps) => {
    const [disable, setDisable] = useState<boolean>(true);
    const [upload, setUpload] = useState<boolean>(true);
    const [images, setImages] = useState<Array<string>>([]);
    const handleChange = (e: any) => {
        console.log(e.target.files[0]);
    };
    const uploadFirebase = () => {
        toast.success('Quá đã Pepsi ơi!');
    };
    const {
        handleSubmit,
        control,
        // setValue,
        reset,
        // formState: { isSubmitSuccessful },
    } = useForm();
    const resetForm = () => {
        reset({
            fullName: '',
            address: '',
        });
    };
    return (
        <>
            <div>
                <h1 className='font-bold text-3xl mb-7 text-center'>Create New Product</h1>
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
                                    Product Name:
                                </label>
                                <InputDefault
                                    placeholder='Enter Product Name'
                                    control={control}
                                    name='productName'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Title:
                                </label>
                                <InputDefault
                                    placeholder='Enter Title'
                                    control={control}
                                    name='title'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <WrapperField>
                                <label htmlFor='' className='font-bold flex-1 text-left col-span-1'>
                                    Subtitle:
                                </label>
                                <InputDefault
                                    placeholder='Enter Subtitle'
                                    control={control}
                                    name='subtitle'
                                    className='col-span-3'
                                />
                            </WrapperField>
                            <div className='text-left flex items-center'>
                                <input
                                    type='file'
                                    onChange={handleChange}
                                    className='w-2/4 px-4 py-2 rounded-lg border border-c6'
                                />
                                <Button
                                    outline={false}
                                    isProcessing={true}
                                    type='button'
                                    onClick={uploadFirebase}
                                    className={className(
                                        'ml-4 h-12 w-[130px] rounded-md text-white font-semibold',
                                        disable
                                            ? 'bg-gradient-to-br from-orange-500 to-pink-500'
                                            : 'bg-gradient-to-br from-orange-200 to-pink-200 cursor-no-drop',
                                    )}
                                >
                                    {disable ? (
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
                            <Button color='success' type='submit' disabled={upload}>
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

export default NewProduct;
