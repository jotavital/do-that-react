'use client';

import { createContext, ReactNode, useContext } from 'react';
import { TaskContextValue } from '@/app/_contexts/task-context/types';
import { useTaskMutations } from '@/app/_hooks/mutations/tasks/useTaskMutations';
import { MoveTaskMutationProps } from '@/app/_hooks/mutations/tasks/types';

const TaskContext = createContext<TaskContextValue>({} as TaskContextValue);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const { moveTaskMutation } = useTaskMutations();
    const isMovingTask = moveTaskMutation.isPending;

    const handleMoveTaskMutation = async (variables: MoveTaskMutationProps) => {
        return await moveTaskMutation.mutateAsync(variables);
    };

    return (
        <TaskContext.Provider value={{ handleMoveTaskMutation, isMovingTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
