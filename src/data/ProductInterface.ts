import { MediaDTO } from './MediaInterface';
import { SortOrderType } from './enum/SortOrderType.enum';

export interface ProductCollectionDTO {
    name: string;
    title: string;
    subTitle: string;
    media: MediaDTO;
}

export interface ProductCollectionPage {
    data: ProductCollectionDTO[];
    size: number;
    pageNumber: number;
    totalElement: number;
    sortBy: string;
    sortDir: SortOrderType;
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
