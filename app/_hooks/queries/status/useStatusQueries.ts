import { useQuery } from '@tanstack/react-query';
import { api } from '@/app/_lib/axios';
import { Status } from '@/app/_models/Status';
import { useAuthContext } from '@/app/_contexts/auth-context';

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
