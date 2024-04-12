import { StatusHeader } from '@/app/_components/boards/statuses/status/header';
import { Tasks } from '@/app/_components/boards/statuses/status/tasks';
import { StatusProps } from '@/app/_components/boards/statuses/status/types';

export const Status: React.FC<StatusProps> = ({ status }: StatusProps) => {
    return (
        <div className="bg-slate-200 min-w-72 h-full border-slate-300 border-[1px] shadow-md rounded-md">
            <StatusHeader status={status} />

            <Tasks statusId={status.id} />
        </div>
    );
};
