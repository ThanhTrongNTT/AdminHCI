import { Modal, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CardCategory from '~/components/card/CardCategory';
import Cardproduct from '~/components/card/Cardproduct';
import { IconPlus } from '~/components/icon/Icon';
import NewProductCategory from '../new/NewProductCategory';
import { productCategoryApi } from '~/api/product.api';
import { toast } from 'react-toastify';

const ListProductCategory = () => {
    const [modalNew, setModalNew] = useState(false);
    const [categories, setCategories] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 4;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllCategory(currentPage);
    };
    const getAllCategory = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productCategoryApi.getAllProductCategory(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setCategories(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onSubmitNew = (values: any) => {
        console.log(values);
        productCategoryApi.createProductCategory(values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Create Category success!');
                getAllCategory(pageNumber);
            }
        });
        setModalNew(!modalNew);
    };
    useEffect(() => {
        getAllCategory(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal show={modalNew} size='7xl' position='center' popup={true} onClose={onCloseNew}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProductCategory onSubmit={onSubmitNew} onCancel={onCloseNew} />
                </Modal.Body>
            </Modal>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Category
                </span>
            </button>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {categories.map((category: any, index) => (
                    <CardCategory category={category} />
                ))}
            </div>
            <div className='flex justify-center'>
                <Pagination
                    showIcons={true}
                    currentPage={pageNumber}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    );
};

export default ListProductCategory;
