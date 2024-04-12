export interface Task {
    id: number;
    title: string;
    status_id: number;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}
