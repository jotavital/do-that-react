import { DropResult } from 'react-beautiful-dnd';
import { Status } from '@/app/_types/Status';
import { Task } from '@/app/_types/Task';

export interface TaskContextValue {
    handleDragEnd: (result: DropResult) => Promise<void>;
    isFetchingStatuses: boolean;
    statuses?: Status[];
    isMovingTask: boolean;
    handleAddTaskToStatus: (statusId: string, task: Task) => void;
}
