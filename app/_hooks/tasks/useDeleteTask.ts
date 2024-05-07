import { useSwal } from '@/app/_hooks/useSwal';
import { useTaskContext } from '@/app/_contexts/task';

export const useDeleteTask = () => {
    const { handleRemoveTaskFromStatus } = useTaskContext();
    const { swal } = useSwal({
        title: 'Tem certeza?',
        text: 'Deseja mesmo excluir a tarefa?',
        confirmButtonText: '🔥 Excluir',
    });

    const handleDeleteTask = async (taskId: string, statusId: string) => {
        await swal().then((result) => {
            if (result.isConfirmed) {
                handleRemoveTaskFromStatus(statusId, taskId);
            }
        });
    };

    return {
        handleDeleteTask,
    };
};
