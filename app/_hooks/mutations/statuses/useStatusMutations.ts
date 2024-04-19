import { useMutation } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { MoveTaskMutationProps } from '@/app/_hooks/mutations/statuses/types';

export const useStatusMutations = () => {
    const rearrangeTasksMutation = useMutation({
        mutationFn: async ({ statusId, tasks }: MoveTaskMutationProps) => {
            await api.put(`statuses/${statusId}/tasks`, {
                tasks,
            });
        },
    });

    return {
        rearrangeTasksMutation,
    };
};
