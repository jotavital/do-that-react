import { useMutation } from '@tanstack/react-query';
import { TaskService } from '@/app/_services/TaskService';
import { TaskInputs } from '@/app/_types/Task';

export const useTaskMutations = () => {
    const createTaskMutation = useMutation({
        mutationFn: async ({
            statusId,
            task,
        }: {
            statusId: string;
            task: TaskInputs;
        }) => await TaskService.createTask(statusId, task),
    });

    return { createTaskMutation };
};
