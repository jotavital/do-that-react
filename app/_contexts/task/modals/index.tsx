'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Modal } from '@/app/_components/shared/modal';
import { CreateTaskModalContent } from '@/app/_components/modals/tasks/create';

interface Value {
    isCreateModalOpen: boolean;
    closeCreateModal: () => void;
    openCreateModal: (data: CreateTaskModalMetadata) => void;
    createTaskMetadata: CreateTaskModalMetadata | undefined;
}

interface CreateTaskModalMetadata {
    statusId: string;
}

const TaskModalsContext = createContext<Value>({} as Value);

export const TaskModalsProvider = ({ children }: { children: ReactNode }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [createTaskMetadata, setCreateTaskMetadata] = useState<
        CreateTaskModalMetadata | undefined
    >();

    const openCreateModal = (data: CreateTaskModalMetadata) => {
        setIsCreateModalOpen(true);

        setCreateTaskMetadata(data);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);

        setCreateTaskMetadata(undefined);
    };

    return (
        <TaskModalsContext.Provider
            value={{
                isCreateModalOpen,
                closeCreateModal,
                openCreateModal,
                createTaskMetadata,
            }}
        >
            {children}

            <Modal
                isOpen={isCreateModalOpen}
                setIsOpen={setIsCreateModalOpen}
                title="Nova Tarefa"
            >
                <CreateTaskModalContent />
            </Modal>
        </TaskModalsContext.Provider>
    );
};

export const useTaskModalsContext = () => {
    return useContext(TaskModalsContext);
};
