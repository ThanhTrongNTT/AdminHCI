import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { IconPlus } from '~/components/icon/Icon';
import NewProduct from '../new/NewProduct';
import { productApi, subProductApi } from '~/api/product.api';
import { toast } from 'react-toastify';
import Cardproduct from '~/components/card/Cardproduct';

function ListProduct() {
    const [modalNew, setModalNew] = useState(false);
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 4;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllProduct(currentPage);
    };
    const getAllProduct = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        productApi.getAllProduct(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            setProducts(res.result.data);
            setIsLoadData(true);
        });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const onSubmitNew = (values: any) => {
        productApi.createProduct(values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Create Product success!');
                getAllProduct(pageNumber);
            }
        });
        setModalNew(!modalNew);
    };
    const onHandleSubmitUpdate = (id: string, values: any) => {
        productApi.updateProduct(id, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Product success!');
                getAllProduct(pageNumber);
            }
        });
    };
    const onHandleDelete = (id: string) => {
        //* Excute Logic avout delete Size
        productApi.deleteProduct(id).then((res: any) => {
            if (res.result === null) {
                toast.error('Delete Product unsuccess!');
            } else {
                toast.success('Delete Product Success!');
                getAllProduct(pageNumber);
            }
        });
    };
    const onHandleNewSubproduct = (productId: string, values: any) => {
        subProductApi.createSubProduct(productId, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Create Subproduct success!');
                getAllProduct(pageNumber);
            }
        });
    };
    const onHandleUpdateSubproduct = (productId: string, subProductId: string, values: any) => {
        subProductApi.updateSubProduct(productId, subProductId, values).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update Subproduct success!');
                getAllProduct(pageNumber);
            }
        });
    };
    const onDeleteSubProduct = (productId: string, subProductId: string) => {
        subProductApi.deleteSubProduct(productId, subProductId).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
                getAllProduct(pageNumber);
            } else {
                toast.success('Delete Subproduct success!');
                getAllProduct(pageNumber);
            }
        });
    };
    const handleSetPublic = (product: any) => {
        if (product.isPublic) {
            productApi.setDeactivateProduct(product.id).then((res: any) => {
                console.log(res);
            });
            toast.success('Deactive Product success!');
            product.isPublic = false;
            getAllProduct(pageNumber);
        } else {
            productApi.setActivateProduct(product.id).then((res: any) => {
                console.log(res);
            });
            toast.success('Active Product success!');
            product.isPublic = true;
            getAllProduct(pageNumber);
        }
    };
    useEffect(() => {
        getAllProduct(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <button
                color='white'
                className='rounded-2xl px-4 py-2 m-4 bg-white hover:bg-success'
                onClick={() => setModalNew(!modalNew)}
            >
                <span className='flex gap-2 items-center font-semibold'>
                    <IconPlus /> Create New Product
                </span>
            </button>
            <div>
                <Modal
                    show={modalNew}
                    size='7xl'
                    position='center'
                    popup={true}
                    onClose={onCloseNew}
                >
                    <Modal.Header className='bg-white' />
                    <Modal.Body className='bg-white'>
                        <NewProduct onSubmit={onSubmitNew} onCancel={onCloseNew} />
                    </Modal.Body>
                </Modal>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {products.map((product: any, index) => (
                    <Cardproduct
                        key={index}
                        onHandleSubmitUpdate={onHandleSubmitUpdate}
                        onHandleDelete={onHandleDelete}
                        onHandleNewSubproduct={onHandleNewSubproduct}
                        onHandleUpdateSubproduct={onHandleUpdateSubproduct}
                        onDeleteSubProduct={onDeleteSubProduct}
                        product={product}
                        handleSetPublic={handleSetPublic}
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
}

export default ListProduct;
