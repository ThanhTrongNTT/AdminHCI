import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { productStyleApi } from '~/api/product.api';
import CardStyle from '~/components/card/CardStyle';
import { IconPlus } from '~/components/icon/Icon';
import NewProductStyle from '../new/NewProductStyle';

const ListProductStyle = () => {
    const [modalNew, setModalNew] = useState(false);
    const [styles, setStyles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 4;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllStyle(currentPage);
    };
    const getAllStyle = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productStyleApi.getAllProductStyle(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setStyles(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onSubmitNew = (values: any) => {
        productStyleApi.createProductStyle(values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Create Category success!');
                getAllStyle(pageNumber);
            }
        });
        setModalNew(!modalNew);
    };
    const onHandleSubmitUpdate = (id: string, values: any) => {
        productStyleApi.updateProductStyle(id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Category success!');
                getAllStyle(pageNumber);
            }
        });
    };
    const onHandleDelete = (id: string) => {
        //* Excute Logic avout delete Size
        productStyleApi.deleteProductStyle(id).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Delete Category Success!');
                getAllStyle(pageNumber);
            }
        });
    };
    useEffect(() => {
        getAllStyle(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <Modal show={modalNew} size='7xl' position='center' popup={true} onClose={onCloseNew}>
                <Modal.Header className='bg-white' />
                <Modal.Body className='bg-white'>
                    <NewProductStyle onSubmit={onSubmitNew} onCancel={onCloseNew} />
                </Modal.Body>
            </Modal>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product Style
                </span>
            </button>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {styles.map((style: any, index) => (
                    <CardStyle
                        selectedStyle={style}
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

export default ListProductStyle;
