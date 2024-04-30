import { api } from '@/app/_lib/axios';
import { Task, TaskInputs } from '@/app/_types/Task';

export class TaskService {
    static createTask = async (statusId: string, task: TaskInputs) => {
        return await api
            .post<Task>('tasks', {
                statusId,
                ...task,
            })
            .then((r) => r.data);
    };
}
