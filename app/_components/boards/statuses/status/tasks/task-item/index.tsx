import React from 'react';
import { Task } from '@/app/_types/Task';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    task: Task;
    index: number;
}

export const TaskItem: React.FC<Props> = ({ task, index }: Props) => {
    return (
        <Draggable draggableId={`draggable-task-${task._id}`} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white min-h-20 rounded-md shadow-sm p-2"
                >
                    <p>{task.name}</p>
                </div>
            )}
        </Draggable>
    );
};
