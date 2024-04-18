'use client';

import { useStatusQueries } from '@/app/_hooks/queries/status/useStatusQueries';
import { Loading } from '@/app/_components/shared/loading';
import { Status } from '@/app/_components/boards/statuses/status';

export const Statuses: React.FC = () => {
    const { fetchAllStatusesQuery } = useStatusQueries();
    const { data, isFetching } = fetchAllStatusesQuery;

    if (isFetching) {
        return <Loading />;
    }

    if (data?.data === undefined || data.data.length <= 0) return;

    return data.data.map((status) => {
        return <Status key={status._id} status={status} />;
    });
};
