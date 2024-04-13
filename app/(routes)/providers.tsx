'use client';

import { AuthProvider } from '../_contexts/auth-context';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppDragDropContext } from '@/app/_contexts/drag-drop-context';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppDragDropContext>
                    <AuthProvider>{children}</AuthProvider>

                    <ReactQueryDevtools initialIsOpen={false} />
                </AppDragDropContext>
            </QueryClientProvider>
            <ToastContainer closeOnClick />
        </>
    );
};
