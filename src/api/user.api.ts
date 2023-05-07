import { EditEmployeeDTO } from '~/data/UserInterface';
import AxiosClient from './axiosClient/AxiosClient';
import { PageDTO } from '~/data/Contanst';

const userApi = {
    editEmployee: (data: EditEmployeeDTO) => {
        const url = 'user/edit';
        return AxiosClient.post(url, data);
    },
    removeEmployee: (id: string) => {
        const url = `user/remove/${id}`;
        return AxiosClient.post(url);
    },
    viewHistory: (data: PageDTO) => {
        const url = '/user/view-history';
        return AxiosClient.post(url, data);
    },
};
export default userApi;
