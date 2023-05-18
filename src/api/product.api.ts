import {
    ProductCategoryDTO,
    ProductCollectionDTO,
    ProductColorDTO,
    ProductDTO,
    ProductSaleDTO,
    ProductSizeDTO,
    ProductStyleDTO,
    SubProductDTO,
} from '~/data/ProductInterface';
import AxiosClient from './axiosClient/AxiosClient';
import { PageDTO } from '~/data/Contanst';

const productApi = {
    getAllProduct: (data: PageDTO) => {
        const url = 'product';
        return AxiosClient.post(url, data);
    },
    getProductInfo: (id: string) => {
        const url = `product/${id}`;
        return AxiosClient.get(url);
    },
    createProduct: (data: ProductDTO) => {
        const url = 'product/create';
        return AxiosClient.post(url, data);
    },
    updateProduct: (id: string, data: ProductDTO) => {
        const url = `product/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProduct: (id: string) => {
        const url = `product/${id}`;
        return AxiosClient.delete(url);
    },
    setPublicProduct: (id: string) => {
        const url = '';
        return AxiosClient.post(url);
    },
};
const subProductApi = {
    createSubProduct: (productId: string, data: SubProductDTO) => {
        const url = `product/${productId}/sub-product/create`;
        return AxiosClient.post(url, data);
    },
    updateSubProduct: (productId: string, subProductId: string, data: SubProductDTO) => {
        const url = `product/${productId}/sub-product/${subProductId}/update`;
        return AxiosClient.put(url, data);
    },
    deleteSubProduct: (productId: string, subProductId: string) => {
        const url = `product/${productId}/sub-product/${subProductId}`;
        return AxiosClient.delete(url);
    },
};
const productCollectionApi = {
    getAllProductCollection: (data: PageDTO) => {
        const url = 'product/collection';
        return AxiosClient.post(url, data);
    },
    createProductCollection: (data: ProductCollectionDTO) => {
        const url = 'product/collection/create';
        return AxiosClient.post(url, data);
    },
    updateProductCollection: (id: string, data: ProductCollectionDTO) => {
        const url = `product/collection/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductCollection: (id: string) => {
        const url = `product/collection/${id}`;
        return AxiosClient.delete(url);
    },
};
const productStyleApi = {
    getAllProductStyle: (data: PageDTO) => {
        const url = 'product/style';
        return AxiosClient.post(url, data);
    },
    createProductStyle: (data: ProductStyleDTO) => {
        const url = 'product/style/create';
        return AxiosClient.post(url, data);
    },
    updateProductStyle: (id: string, data: ProductSizeDTO) => {
        const url = `product/style/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductStyle: (id: string) => {
        const url = `product/style/${id}`;
        return AxiosClient.delete(url);
    },
};
const productCategoryApi = {
    getAllProductCategory: (data: PageDTO) => {
        const url = 'product/category';
        return AxiosClient.post(url, data);
    },
    createProductCategory: (data: ProductCategoryDTO) => {
        const url = 'product/category/create';
        return AxiosClient.post(url, data);
    },
    updateProductCategory: (id: string, data: ProductCategoryDTO) => {
        const url = `product/category/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductCategory: (id: string) => {
        const url = `product/category/${id}`;
        return AxiosClient.delete(url);
    },
};
const productSaleApi = {
    getAllProductSale: (data: PageDTO) => {
        const url = 'product/sale';
        return AxiosClient.post(url, data);
    },
    createProductSale: (data: ProductSaleDTO) => {
        const url = 'product/sale/create';
        return AxiosClient.post(url, data);
    },
    updateProductSale: (id: string, data: ProductSaleDTO) => {
        const url = `product/sale/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductSale: (id: string) => {
        const url = `product/sale/${id}`;
        return AxiosClient.delete(url);
    },
};
const productColorApi = {
    getAllProductColor: (data: PageDTO) => {
        const url = '/product/color';
        return AxiosClient.post(url, data);
    },
    createProductColor: (data: ProductColorDTO) => {
        const url = '/product/color/create';
        return AxiosClient.post(url, data);
    },
    updateProductColor: (id: number, data: ProductColorDTO) => {
        const url = `/product/color/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductColor: (id: number) => {
        const url = `/product/color/${id}`;
        return AxiosClient.delete(url);
    },
};
const productSizeApi = {
    getAllProductSize: (data: PageDTO) => {
        const url = 'product/size';
        return AxiosClient.post(url, data);
    },
    createProductSize: (data: ProductSizeDTO) => {
        const url = 'product/size/create';
        return AxiosClient.post(url, data);
    },
    updateProductSize: (id: number, data: ProductSizeDTO) => {
        const url = `product/size/${id}/update`;
        return AxiosClient.put(url, data);
    },
    deleteProductSize: (id: number) => {
        const url = `product/size/${id}`;
        return AxiosClient.delete(url);
    },
};
export {
    productApi,
    subProductApi,
    productCollectionApi,
    productStyleApi,
    productCategoryApi,
    productSaleApi,
    productColorApi,
    productSizeApi,
};
