import { StatusColor } from '@/app/_components/boards/statuses/status/types';

export interface Status {
    id: number;
    title: string;
    color: StatusColor;
    user_id: number | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}
