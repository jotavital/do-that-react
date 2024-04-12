'use client';

import { AuthProvider } from '@/app/_contexts/AuthContext';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <ToastContainer closeOnClick />
        </>
    );
};
