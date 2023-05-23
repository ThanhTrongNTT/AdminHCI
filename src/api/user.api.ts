import { EditEmployeeDTO } from '~/data/UserInterface';
import AxiosClient from './axiosClient/AxiosClient';
import { PageDTO } from '~/data/Contanst';

const userApi = {
    getAllUser: (data: PageDTO) => {
        const url = '/user';
        return AxiosClient.post(url, data);
    },
    createAdmin: (data: any) => {
        const url = '/user/create/admin';
        return AxiosClient.post(url, data);
    },
    viewHistory: (data: PageDTO) => {
        const url = '/user/view-history';
        return AxiosClient.post(url, data);
    },
    updateUser: (data: any) => {
        const url = '/user/edit';
        return AxiosClient.post(url, data);
    },
};
export default userApi;
