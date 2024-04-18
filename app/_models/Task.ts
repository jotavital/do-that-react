export interface Task {
    _id: string;
    title: string;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}
