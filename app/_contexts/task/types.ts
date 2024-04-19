import { DropResult } from 'react-beautiful-dnd';
import { Status } from '@/app/_models/Status';

export interface TaskContextValue {
    handleDragEnd: (result: DropResult) => Promise<void>;
    isFetchingStatuses: boolean;
    statuses?: Status[];
    isMovingTask: boolean;
}
