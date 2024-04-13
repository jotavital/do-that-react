import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';

export const useTaskDragAndDrop = () => {
    const handleDragEnd = useCallback((result: DropResult) => {
        const { draggableId, destination } = result;

        if (!destination) {
            return;
        }

        const { droppableId } = destination;
        const taskId = draggableId.split('draggable-task-')[1];
        const statusId = droppableId.split('droppable-status-')[1];

        if (taskId === undefined || statusId === undefined) {
            return;
        }

        console.log(taskId, statusId);
    }, []);

    return { handleDragEnd };
};
