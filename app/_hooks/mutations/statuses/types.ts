import { Task } from '@/app/_types/Task';

export interface MoveTaskMutationProps {
    tasks: Task[];
    statusId: string;
}
