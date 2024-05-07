import React from 'react';
import { Task } from '@/app/_types/Task';
import { Draggable } from 'react-beautiful-dnd';
import { TaskActions } from '@/app/_components/boards/statuses/status/tasks/task-item/actions';

interface Props {
    task: Task;
    index: number;
    statusId: string;
}

export const TaskItem: React.FC<Props> = ({ task, index, statusId }: Props) => {
    return (
        <Draggable draggableId={`draggable-task-${task._id}`} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="group bg-white min-h-20 rounded-md shadow-sm p-2 flex cursor-grab"
                >
                    <div className={'w-10/12'}>
                        <p>{task.name}</p>
                    </div>

                    <TaskActions taskId={task._id} statusId={statusId} />
                </div>
            )}
        </Draggable>
    );
};
