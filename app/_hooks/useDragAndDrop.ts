'use client';

import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useTaskContext } from '../_contexts/task';

export const useDragAndDrop = () => {
    const { handleDragEnd } = useTaskContext();

    const onDragEnd = useCallback(
        (result: DropResult) => {
            if (result.type === 'TASK') {
                void handleDragEnd(result);
            }
        },
        [handleDragEnd],
    );

    return { onDragEnd };
};
