import { StatusHeader } from '@/app/_components/boards/statuses/status/header';
import { Tasks } from '@/app/_components/boards/statuses/status/tasks';
import { StatusProps } from '@/app/_components/boards/statuses/status/types';
import { Droppable } from 'react-beautiful-dnd';
import { useTaskContext } from '@/app/_contexts/task';

export const Status: React.FC<StatusProps> = ({ status }: StatusProps) => {
    const { isMovingTask } = useTaskContext();

    return (
        <Droppable droppableId={`droppable-status-${status._id}`} type="TASK">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    className={`bg-slate-200 min-w-72 h-full border-slate-300 border-[1px] shadow-md rounded-md
                    ${snapshot?.isDraggingOver && 'bg-blue-100'} ${
                        isMovingTask && 'opacity-40 cursor-not-allowed'
                    }`}
                    {...provided.droppableProps}
                >
                    <StatusHeader status={status} />

                    <Tasks tasks={status.tasks} statusId={status._id} />

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
