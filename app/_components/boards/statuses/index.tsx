'use client';

import { Loading } from '@/app/_components/shared/loading';
import { Status } from '@/app/_components/boards/statuses/status';
import { useTaskContext } from '@/app/_contexts/task';

export const Statuses: React.FC = () => {
    const { isFetchingStatuses, statuses } = useTaskContext();

    if (isFetchingStatuses) {
        return <Loading />;
    }

    if (statuses === undefined || statuses.length <= 0) return;

    return statuses.map((status) => {
        return <Status key={status._id} status={status} />;
    });
};
