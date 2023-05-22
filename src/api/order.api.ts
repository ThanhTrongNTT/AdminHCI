import { PageDTO } from '~/data/Contanst';
import AxiosClient from './axiosClient/AxiosClient';

const orderApi = {
    getAllOrder: (data: PageDTO) => {
        const url = '/order/all';
        return AxiosClient.post(url, data);
    },
    viewOrderDetail: (id: string) => {
        const url = `/order/${id}`;
        return AxiosClient.get(url);
    },
    createOrder: (data: any) => {
        const url = '/order/create';
        return AxiosClient.post(url, data);
    },
    viewMyOrder: (data: PageDTO) => {
        const url = '/order';
        return AxiosClient.post(url, data);
    },
};

export default orderApi;
