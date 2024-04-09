import { TaskItem } from '@/app/_components/boards/lists/tasks/task-item';
import React from 'react';

export const TaskList: React.FC = () => {
    return (
        <div className="max-h-[90%] p-3 flex flex-col gap-2 overflow-y-auto">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    );
};
