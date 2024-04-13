import { useQuery } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { Task } from '@/app/_models/Task';

interface Props {
    statusId?: string | number;
}

export const useTaskQueries = ({ statusId }: Props) => {
    const fetchTasksByStatusQuery = useQuery({
        queryKey: ['tasks-by-status', { statusId: statusId }],
        queryFn: async () =>
            await api
                .get<Task[]>(`/tasks?statusId=${statusId}`)
                .then((response) => response),
        enabled: statusId !== undefined,
    });

    return { fetchTasksByStatusQuery };
};
