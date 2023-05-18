import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { productCollectionApi } from '~/api/product.api';
import CardCollection from '~/components/card/CardCollection';
import { IconPlus } from '~/components/icon/Icon';
import NewProductCollection from '../new/NewProductCollection';

const ListProductCollection = () => {
    const [modalNew, setModalNew] = useState(false);
    const [collections, setCollections] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 4;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllCollection(currentPage);
    };
    const getAllCollection = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productCollectionApi.getAllProductCollection(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setCollections(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onSubmitNew = (values: any) => {
        productCollectionApi.createProductCollection(values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Create Collection success!');
                getAllCollection(pageNumber);
            }
        });
        setModalNew(!modalNew);
    };
    const onHandleSubmitUpdate = (id: string, values: any) => {
        productCollectionApi.updateProductCollection(id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Collection success!');
                getAllCollection(pageNumber);
            }
        });
    };
    const onHandleDelete = (id: string) => {
        //* Excute Logic avout delete Size
        productCollectionApi.deleteProductCollection(id).then((res: any) => {
            if (res.result === null) {
                toast.error('Delete Collection unsuccess!');
            } else {
                toast.success('Delete Collection Success!');
                getAllCollection(pageNumber);
            }
        });
    };
    useEffect(() => {
        getAllCollection(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal show={modalNew} size='7xl' position='center' popup={true} onClose={onCloseNew}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProductCollection onSubmit={onSubmitNew} onCancel={onCloseNew} />
                </Modal.Body>
            </Modal>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Collection
                </span>
            </button>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {collections.map((collection: any, index) => (
                    <CardCollection
                        selectedCollection={collection}
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

export default ListProductCollection;
