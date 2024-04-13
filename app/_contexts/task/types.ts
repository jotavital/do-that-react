import { DropResult } from 'react-beautiful-dnd';

export interface TaskContextValue {
    handleDragEnd: (result: DropResult) => Promise<void>;
    isMovingTask: boolean;
}
