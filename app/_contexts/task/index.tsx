'use client';

import { createContext, ReactNode, useCallback, useContext } from 'react';
import { TaskContextValue } from '@/app/_contexts/task/types';
import { useTaskMutations } from '@/app/_hooks/mutations/tasks/useTaskMutations';
import { DropResult } from 'react-beautiful-dnd';

const TaskContext = createContext<TaskContextValue>({} as TaskContextValue);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const { moveTaskMutation } = useTaskMutations();
    const isMovingTask = moveTaskMutation.isPending;

    const handleDragEnd = useCallback(
        async (result: DropResult) => {
            const {
                draggableId,
                destination,
                source: { index: sourceIndex, droppableId: sourceDroppableId },
            } = result;

            if (!destination) return;

            const {
                droppableId: destinationDroppableId,
                index: destinationIndex,
            } = destination;

            if (
                sourceIndex === destinationIndex &&
                sourceDroppableId === destinationDroppableId
            )
                return;

            const taskId = draggableId.split('draggable-task-')[1];
            const destinationStatusId =
                destinationDroppableId.split('droppable-status-')[1];
            const sourceStatusId =
                sourceDroppableId.split('droppable-status-')[1];

            if (taskId === undefined || destinationStatusId === undefined) {
                return;
            }

            await moveTaskMutation.mutateAsync({
                taskId,
                destinationIndex,
                destinationStatusId,
                sourceStatusId,
            });
        },
        [moveTaskMutation],
    );

    return (
        <TaskContext.Provider value={{ handleDragEnd, isMovingTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};
