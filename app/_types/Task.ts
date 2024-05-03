import zod from '@/app/_lib/zod';

export interface Task {
    _id: string;
    name: string;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}

export const CreateTaskSchema = zod.object({
    name: zod.string().min(3).max(100),
});

export type TaskInputs = zod.infer<typeof CreateTaskSchema>;
