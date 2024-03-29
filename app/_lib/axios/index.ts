import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

interface ApiValidationError {
	errors: {
		[name: string]: string[];
	};
	message: string;
}

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(
	(response: AxiosResponse<unknown, unknown>) => {
		return response;
	},
	(error: AxiosError<ApiValidationError>) => {
		const errorResponse = error.response?.data;

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
