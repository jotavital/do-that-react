'use client';

import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useTaskContext } from '@/app/_contexts/task-context';

export const useTaskDragAndDrop = () => {
    const { handleMoveTaskMutation } = useTaskContext();

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

            await handleMoveTaskMutation({
                taskId,
                destinationIndex,
                destinationStatusId,
                sourceStatusId,
            });
        },
        [handleMoveTaskMutation],
    );

    return { handleDragEnd };
};
