'use client';

import { AuthProvider } from '@/app/_contexts/AuthContext';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDragAndDrop } from '@/app/_hooks/useDragAndDrop';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const AppProviders = ({ children }: { children: ReactNode }) => {
    const { onDragEnd } = useDragAndDrop();

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>{children}</AuthProvider>

                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </DragDropContext>
            <ToastContainer closeOnClick />
        </>
    );
};
