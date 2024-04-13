'use client';

import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useTaskDragAndDrop } from '@/app/_hooks/useTaskDragAndDrop';

export const useDragAndDrop = () => {
    const { handleDragEnd } = useTaskDragAndDrop();

    const onDragEnd = useCallback(
        (result: DropResult) => {
            if (result.type === 'TASK') {
                handleDragEnd(result);
            }
        },
        [handleDragEnd],
    );

    return { onDragEnd };
};
