import { useQuery } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { Status } from '@/app/_types/Status';
import { useAuthContext } from '@/app/_contexts/auth';

export const useStatusQueries = () => {
    const { user } = useAuthContext();

    const fetchAllStatusesQuery = useQuery({
        queryKey: ['statuses', user?.id],
        queryFn: async () =>
            await api
                .get<Status[]>(`/statuses?userId=${user?.id}`)
                .then((response) => response),
        enabled: user?.id !== undefined,
    });

    return { fetchAllStatusesQuery };
};
