import { EditEmployeeDTO } from '~/data/UserInterface';
import AxiosClient from './axiosClient/AxiosClient';

const userApi = {
    editEmployee: (data: EditEmployeeDTO) => {
        const url = 'user/edit';
        return AxiosClient.post(url, data);
    },
    removeEmployee: (id: string) => {
        const url = `user/remove/${id}`;
        return AxiosClient.post(url);
    },
};
export default userApi;
