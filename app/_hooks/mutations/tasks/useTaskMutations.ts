import { useMutation } from '@tanstack/react-query';
import { TaskService } from '@/app/_services/TaskService';
import { Task, TaskInputs } from '@/app/_types/Task';
import { useTaskContext } from '@/app/_contexts/task';

interface CreateTaskVariables {
    statusId: string;
    task: TaskInputs;
}

export const useTaskMutations = () => {
    const { handleAddTaskToStatus } = useTaskContext();

    const createTaskMutation = useMutation({
        mutationFn: async ({ statusId, task }: CreateTaskVariables) =>
            await TaskService.createTask(statusId, task),
        onSuccess: (task: Task, { statusId }: CreateTaskVariables) => {
            handleAddTaskToStatus(statusId, task);
        },
    });

    return { createTaskMutation };
};
