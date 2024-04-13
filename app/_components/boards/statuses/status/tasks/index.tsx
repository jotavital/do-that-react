import { TaskItem } from '@/app/_components/boards/statuses/status/tasks/task-item';
import React from 'react';
import { useTaskQueries } from '@/app/_hooks/queries/tasks/useTaskQueries';
import { Loading } from '@/app/_components/shared/loading';
import { useTaskContext } from '@/app/_contexts/task';
import { Task } from '@/app/_models/Task';

interface Props {
    statusId: number;
}

export const Tasks: React.FC<Props> = ({ statusId }: Props) => {
    const { fetchTasksByStatusQuery } = useTaskQueries({ statusId });
    const { data, isFetching } = fetchTasksByStatusQuery;
    const { isMovingTask } = useTaskContext();

    return (
        <div className="h-[90%] p-3 flex flex-col gap-2 overflow-y-auto">
            {isFetching ? (
                <Loading />
            ) : (
                <>
                    {isMovingTask && <Loading />}

                    {data?.data?.map((task: Task, index: number) => (
                        <TaskItem
                            key={`draggable-task-${task.id}`}
                            task={task}
                            index={index}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
