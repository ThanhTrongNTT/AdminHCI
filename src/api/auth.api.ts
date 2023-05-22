import {
    ConfirmEmailDTO,
    ForgotPasswordDTO,
    LoginDTO,
    LogoutDTO,
    RegisterDTO,
    ResetPasswordDTO,
    UpdateAccountDTO,
    UpdatePasswordDTO,
} from '~/data/AuthInterface';
import AxiosClient from './axiosClient/AxiosClient';

const authApi = {
    register: (data: RegisterDTO) => {
        const url = 'auth/register';
        return AxiosClient.post(url, { data });
    },
    login: (data: LoginDTO) => {
        const url = 'auth/log-in';
        return AxiosClient.post(url, data);
    },
    confirmEmail: (data: ConfirmEmailDTO) => {
        const url = 'auth/confirm-email';
        return AxiosClient.post(url, data);
    },
    resendToken: () => {
        const url = 'auth/resend-token';
        return AxiosClient.post(url);
    },
    refreshToken: () => {
        const url = 'auth/refresh-token';
        return AxiosClient.get(url);
    },
    logout: (id: LogoutDTO) => {
        const url = 'auth/log-out';
        return AxiosClient.post(url, { id: id });
    },
    updatePassword: (data: UpdatePasswordDTO) => {
        const url = 'auth/password';
        return AxiosClient.post(url, data);
    },
    updateInformation: (data: UpdateAccountDTO) => {
        const url = 'auth/update-account';
        return AxiosClient.post(url, data);
    },
    forgotPassword: (data: ForgotPasswordDTO) => {
        const url = 'auth/forgot-password';
        return AxiosClient.post(url, data);
    },
    resetPassword: (tokenId: string, data: ResetPasswordDTO) => {
        const url = `auth/reset-password/${tokenId}`;
        return AxiosClient.post(url, data);
    },
};
export default authApi;
