'use client';

import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { api } from '@/app/_lib/axios';
import { useQueryClient } from '@tanstack/react-query';

export const useTaskDragAndDrop = () => {
    const queryClient = useQueryClient();

    const handleDragEnd = useCallback(
        (result: DropResult) => {
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

            void api
                .put(`tasks/${taskId}/move`, {
                    order: destinationIndex,
                    statusId: destinationStatusId,
                })
                .then(() => {
                    void queryClient.invalidateQueries({
                        predicate: (query) =>
                            query.queryKey[0] === 'tasks-by-status' &&
                            [sourceStatusId, destinationStatusId].includes(
                                // @ts-expect-error foo
                                String(query.queryKey[1]?.statusId),
                            ),
                    });
                });
        },
        [queryClient],
    );

    return { handleDragEnd };
};
