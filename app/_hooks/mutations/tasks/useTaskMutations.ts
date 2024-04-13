import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { MoveTaskMutationProps } from '@/app/_hooks/mutations/tasks/types';

export const useTaskMutations = () => {
    const queryClient = useQueryClient();

    const moveTaskMutation = useMutation({
        mutationFn: async ({
            taskId,
            destinationIndex,
            destinationStatusId,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            sourceStatusId,
        }: MoveTaskMutationProps) => {
            await api.put(`tasks/${taskId}/move`, {
                order: destinationIndex,
                statusId: destinationStatusId,
            });
        },
        onSuccess: (_, variables) => {
            const { sourceStatusId, destinationStatusId } = variables;

            void queryClient.invalidateQueries({
                predicate: (query_1) =>
                    query_1.queryKey[0] === 'tasks-by-status' &&
                    [sourceStatusId, destinationStatusId].includes(
                        // @ts-expect-error foo
                        String(query_1.queryKey[1]?.statusId),
                    ),
            });
        },
    });

    return {
        moveTaskMutation,
    };
};
