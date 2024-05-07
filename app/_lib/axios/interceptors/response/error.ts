import { AxiosError } from 'axios';
import { ApiValidationError } from '@/app/_types/Errors';
import { AuthenticationService } from '@/app/_services/AuthenticationService';
import { toast } from 'react-toastify';

export const responseErrorInterceptor = (
    error: AxiosError<ApiValidationError>,
) => {
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
};
