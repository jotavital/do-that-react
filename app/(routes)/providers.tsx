'use client';

import { AuthProvider } from '../_contexts/auth';
import { ReactNode, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppDragDropContext } from '../_contexts/drag-drop';
import { TaskProvider } from '../_contexts/task';
import ReactModal from 'react-modal';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const AppProviders = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        ReactModal.setAppElement('#root');
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <TaskProvider>
                        <AppDragDropContext>{children}</AppDragDropContext>
                    </TaskProvider>
                </AuthProvider>

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>

            <ToastContainer closeOnClick />
        </>
    );
};
