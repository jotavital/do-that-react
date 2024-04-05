'use client';

import { AuthProvider } from '@/app/_contexts/AuthContext';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <AuthProvider>{children}</AuthProvider>
            <ToastContainer closeOnClick />
        </>
    );
};
