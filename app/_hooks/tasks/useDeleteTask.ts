import { useSwal } from '@/app/_hooks/useSwal';

export const useDeleteTask = () => {
    const { swal } = useSwal({
        title: 'Tem certeza?',
        text: 'Deseja mesmo excluir a tarefa?',
        confirmButtonText: '🔥 Excluir',
    });

    const handleDeleteTask = async (taskId: string) => {
        await swal().then((result) => {
            if (result.isConfirmed) {
                console.log('belezannnn', taskId);
            }
        });
    };

    return {
        handleDeleteTask,
    };
};
