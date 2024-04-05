import { AuthenticationService } from '@/app/_services/AuthenticationService';
import { ApiValidationError } from '@/app/_types/Errors';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getCookie } from 'cookies-next';
import { toast } from 'react-toastify';

const accessTokenCookie = getCookie(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
);

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: `Bearer ${accessTokenCookie}`,
    },
});

api.interceptors.response.use(
    (response: AxiosResponse<unknown, unknown>) => {
        return response;
    },
    (error: AxiosError<ApiValidationError>) => {
        const response = error.response;
        if (response?.status === 401) {
            AuthenticationService.signOut();
        }

        const errorResponse = response?.data;

        if (errorResponse?.errors !== undefined) {
            Object.keys(errorResponse?.errors).forEach((key) => {
                toast.error(errorResponse?.errors[key][0]);
            });
        } else if (errorResponse?.message !== undefined) {
            toast.error(error?.response?.data?.message);
        }

        throw error;
    },
);

export { api };
