import React from 'react';
import { Task } from '@/app/_models/Task';

interface Props {
    task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }: Props) => {
    return (
        <div className="bg-white min-h-20 rounded-md shadow-sm p-2">
            <p>{task.title}</p>
        </div>
    );
};
