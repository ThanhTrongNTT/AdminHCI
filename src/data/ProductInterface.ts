import { MediaDTO } from './Contanst';
import { SortOrderType } from './enum/SortOrderType.enum';

export interface ProductDTO {
    styleId: string;
    categoryId: string;
    collectionId: string;
    name: string;
    description: string;
    form: string;
    material: string;
}

export interface SubProductDTO {
    colorId: number;
    sizeId: number;
    price: number;
    quantity: number;
    meidas: [];
}
export interface ProductCollectionDTO {
    name: string;
    title: string;
    subTitle: string;
    media: MediaDTO;
}
export interface ProductStyleDTO {
    name: string;
    title: string;
    subTitle: string;
    media: MediaDTO;
}
export interface ProductCategoryDTO {
    name: string;
    gender: string;
    media: MediaDTO;
}
export interface ProductSaleDTO {
    name: string;
    description: string;
    type: string;
    numberProduct: number;
    percent: number;
}
export interface ProductColorDTO {
    colorName: string;
    colorValue: string;
}
export interface ProductSizeDTO {
    sizeName: string;
    weight: string;
    height: string;
}
