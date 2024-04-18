import { StatusColor } from '@/app/_components/boards/statuses/status/types';
import { Task } from '@/app/_models/Task';

export interface Status {
    _id: string;
    title: string;
    color: StatusColor;
    user_id: number;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;

    tasks: Task[];
}
