'use client';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}
			<ToastContainer closeOnClick />
		</>
	);
};
