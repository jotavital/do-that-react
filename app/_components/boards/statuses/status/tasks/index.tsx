import { TaskItem } from '@/app/_components/boards/statuses/status/tasks/task-item';
import React from 'react';
import { useTasksQueries } from '@/app/_queries/tasks/useTasksQueries';
import { Loading } from '@/app/_components/shared/loading';
import { Task } from '@/app/_models/Task';

interface Props {
    statusId: number;
}

export const Tasks: React.FC<Props> = ({ statusId }: Props) => {
    const { fetchTasksByStatusQuery } = useTasksQueries({ statusId });
    const { data, isFetching } = fetchTasksByStatusQuery;

    return (
        <div className="h-[90%] p-3 flex flex-col gap-2 overflow-y-auto">
            {isFetching ? (
                <Loading />
            ) : (
                data?.data?.map((task: Task, index: number) => (
                    <TaskItem
                        key={`draggable-task-${task.id}`}
                        task={task}
                        index={index}
                    />
                ))
            )}
        </div>
    );
};
