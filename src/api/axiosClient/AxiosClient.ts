// api/axiosClient.js
import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});
AxiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    document.body.classList.add('loading-indicator');
    const accessToken = await sessionStorage.getItem('accessToken');
    console.log('accessToken', accessToken);

    if (accessToken)
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        };
    // console.log('config ne: ', config);
    return await config;
});
AxiosClient.interceptors.response.use(
    async (response) => {
        // spinning hide
        // UPDATE: Add this code to hide global loading indicator
        document.body.classList.remove('loading-indicator');
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    async (error) => {
        // spinning hide
        // UPDATE: Add this code to hide global loading indicator
        document.body.classList.remove('loading-indicator');
        console.log(error);
        if (!error.response.data) {
            toast.error(error.message, {
                delay: 10,
                draggable: true,
                pauseOnHover: false,
            });
        } else {
            toast.error(error.response.data.message, {
                autoClose: 500,
                delay: 10,
                draggable: true,
                pauseOnHover: false,
            });
        }

        const prevRequest = error.config;
        const refreshToken = await sessionStorage.getItem('refreshToken');
        if (!error.response.status) {
            return error.message;
        } else if (error.response.status === 401) {
            prevRequest.sent = true;
            console.log('refreshToken: ', refreshToken);
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const newAccessToken = await axios.post(
                `${process.env.REACT_APP_API_URL}token/${refreshToken}`,
                config,
            );
            if (newAccessToken.data.accessToken) {
                console.log('newAccessToken', newAccessToken);
                sessionStorage.setItem('accessToken', newAccessToken.data.accessToken);
            }
        }
        return error;
    },
);
export default AxiosClient;
