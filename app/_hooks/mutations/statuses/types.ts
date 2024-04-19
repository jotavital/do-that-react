import { Task } from '@/app/_models/Task';

export interface MoveTaskMutationProps {
    tasks: Task[];
    statusId: string;
}
