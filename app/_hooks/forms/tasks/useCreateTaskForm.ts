import { useForm } from 'react-hook-form';
import { CreateTaskSchema, TaskInputs } from '@/app/_types/Task';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTaskMutations } from '@/app/_hooks/mutations/tasks/useTaskMutations';
import { useTaskModalsContext } from '@/app/_contexts/task/modals';

interface Props {
    statusId?: string;
}

export const useCreateTaskForm = ({ statusId }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskInputs>({
        resolver: zodResolver(CreateTaskSchema),
    });
    const { createTaskMutation } = useTaskMutations();
    const { closeCreateModal } = useTaskModalsContext();

    const handleCreate = async (task: TaskInputs) => {
        if (statusId) {
            await createTaskMutation.mutateAsync({
                statusId,
                task,
            });

            closeCreateModal();
        }
    };

    const onSubmit = handleSubmit(handleCreate);

    return {
        register,
        onSubmit,
        errors,
        isSaving: createTaskMutation.isPending,
    };
};
