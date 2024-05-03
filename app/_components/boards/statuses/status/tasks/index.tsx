import { TaskItem } from '@/app/_components/boards/statuses/status/tasks/task-item';
import React from 'react';
import { Loading } from '@/app/_components/shared/loading';
import { useTaskContext } from '@/app/_contexts/task';
import { Task } from '@/app/_types/Task';

interface Props {
    tasks: Task[];
}

export const Tasks: React.FC<Props> = ({ tasks }: Props) => {
    const { isMovingTask } = useTaskContext();

    return (
        <div className="h-[90%] p-3 flex flex-col gap-2 overflow-y-auto">
            {isMovingTask && <Loading />}

            {tasks.map((task: Task, index: number) => {
                if (task) {
                    return (
                        <TaskItem
                            key={`draggable-task-${task._id}`}
                            task={task}
                            index={index}
                        />
                    );
                }
            })}
        </div>
    );
};
