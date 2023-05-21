import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { productCategoryApi } from '~/api/product.api';
import CardCategory from '~/components/card/CardCategory';
import { IconPlus } from '~/components/icon/Icon';
import NewProductCategory from '../new/NewProductCategory';

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
        const orders: any[] = [
            {
                props: 'gender',
                sortDir: 'asc',
            },
        ];
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
    const onHandleSubmitUpdate = (id: string, values: any) => {
        productCategoryApi.updateProductCategory(id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Category success!');
                getAllCategory(pageNumber);
            }
        });
    };
    const onHandleDelete = (id: string) => {
        //* Excute Logic avout delete Size
        productCategoryApi.deleteProductCategory(id).then((res: any) => {
            if (res.result === null) {
                toast.error('Delete Category unsuccess!');
            } else {
                toast.success('Delete Category Success!');
                getAllCategory(pageNumber);
            }
        });
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
                    <CardCategory
                        selectedCategory={category}
                        key={index}
                        onHandleDelete={onHandleDelete}
                        onHandleSubmitUpdate={onHandleSubmitUpdate}
                    />
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
