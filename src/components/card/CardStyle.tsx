import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import DetailProductStyle from '~/screens/detail/DetailProductStyle';

type CardStyleProps = {
    onHandleDelete: (id: string) => void;
    onHandleSubmitUpdate: (id: string, values: any) => void;
    selectedStyle: any;
};
const MAX_LENGTH = 50;
const CardStyle = ({ onHandleDelete, onHandleSubmitUpdate, selectedStyle }: CardStyleProps) => {
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const shortenText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text; // Trả về đoạn văn bản gốc nếu nó đã ngắn hơn hoặc bằng maxLength
        }
        const shortened = text.substr(0, maxLength); // Cắt đoạn văn bản ban đầu thành maxLength ký tự
        return `${shortened}...`; // Thêm dấu "..." vào cuối đoạn văn bản ngắn
    };
    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };
    const onSubmitUpdate = (id: string, values: any) => {
        onHandleSubmitUpdate(id, values);
        setModalUpdate(!modalUpdate);
    };
    const handleDelete = () => {
        onHandleDelete(selectedStyle.id);
        setModalDelete(!modalDelete);
    };
    const onCancelDelete = () => {
        setModalDelete(!modalDelete);
    };
    return (
        <>
            <Modal
                show={modalUpdate}
                size='7xl'
                position='center'
                popup={true}
                onClose={onCloseUpdate}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <DetailProductStyle
                        onCancel={onCloseUpdate}
                        onSubmit={onSubmitUpdate}
                        style={selectedStyle}
                    />
                </Modal.Body>
            </Modal>
            <Modal
                show={modalDelete}
                size='xl'
                position='center'
                popup={true}
                onClose={onCancelDelete}
            >
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <>
                        <div className='items-center text-center'>
                            <h1 className='text-2xl font-bold p-3'>Delete Style</h1>
                            <span>
                                <h1>Do you want delete style with name: {selectedStyle.name}</h1>{' '}
                            </span>

                            <div className='flex items-center justify-center gap-20 mt-10'>
                                <Button color='success' onClick={handleDelete}>
                                    Yes
                                </Button>
                                <Button color='failure' onClick={onCancelDelete}>
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </>
                </Modal.Body>
            </Modal>
            <div className='w-[350px] shadow-xl bg-white m-2 rounded-2xl'>
                <img
                    className='h-[250px] w-full rounded-t-2xl'
                    src={
                        selectedStyle.mediaLink === 'https://google.com' ||
                        selectedStyle.mediaLink === null
                            ? 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            : selectedStyle.mediaLink
                    }
                    alt=''
                />
                <div className='flex flex-col mt-3'>
                    <div className='px-5'>
                        <p className='text-black font-semibold text-lg h-[56px]'>
                            Style Name: {selectedStyle.name}
                        </p>
                        <span className='flex'>
                            <p className='font-semibold'>Title:</p>
                            <p className='h-[48px] px-2 text-left'>{selectedStyle?.title}</p>
                        </span>
                        <span className='flex'>
                            <p className='font-semibold'>Subtite:</p>
                            <p className='px-2 text-left h-[48px]'>
                                {shortenText(selectedStyle?.subTitle, MAX_LENGTH)}
                            </p>
                        </span>
                    </div>
                </div>
                <div className='flex justify-center items-center py-4 mt-3 flex-col'>
                    <div className='flex'>
                        <Button color='light' className='mx-2' onClick={onCloseUpdate}>
                            Update
                        </Button>
                        <Button color='failure' className='mx-2' onClick={onCancelDelete}>
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardStyle;
