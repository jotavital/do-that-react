import { MoveTaskMutationProps } from '@/app/_hooks/mutations/tasks/types';

export interface TaskContextValue {
    handleMoveTaskMutation: (variables: MoveTaskMutationProps) => Promise<void>;
    isMovingTask: boolean;
}
