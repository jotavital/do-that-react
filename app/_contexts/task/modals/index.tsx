'use client';

import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { Modal } from '@/app/_components/shared/modal';

interface Value {
    isCreateModalOpen: boolean;
    setIsCreateModalOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskModalsContext = createContext<Value>({} as Value);

export const TaskModalsProvider = ({ children }: { children: ReactNode }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(true);

    return (
        <TaskModalsContext.Provider
            value={{
                isCreateModalOpen,
                setIsCreateModalOpen,
            }}
        >
            {children}

            <Modal
                isOpen={isCreateModalOpen}
                setIsOpen={setIsCreateModalOpen}
                title="Criar Tarefa"
            >
                <div className="p-3">
                    <p>o modal está aqui</p>
                </div>
            </Modal>
        </TaskModalsContext.Provider>
    );
};

export const useTaskModalsContext = () => {
    return useContext(TaskModalsContext);
};
