import { useQuery } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { Status } from '@/app/_models/Status';

export const useStatusQueries = () => {
    const fetchAllStatusesQuery = useQuery({
        queryKey: ['statuses'],
        queryFn: async () =>
            await api.get<Status[]>('/statuses').then((response) => response),
    });

    return { fetchAllStatusesQuery };
};
