import axios, { AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';
import { responseErrorInterceptor } from '@/app/_lib/axios/interceptors/response/error';

const accessTokenCookie = getCookie(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
);

const publicApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PRIVATE_API_URL,
    headers: {
        Authorization: `Bearer ${accessTokenCookie}`,
    },
});

api.interceptors.response.use((response: AxiosResponse<unknown, unknown>) => {
    return response;
}, responseErrorInterceptor);

publicApi.interceptors.response.use(
    (response: AxiosResponse<unknown, unknown>) => {
        return response;
    },
    responseErrorInterceptor,
);

export { api, publicApi };
