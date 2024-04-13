import { StatusHeader } from '@/app/_components/boards/statuses/status/header';
import { Tasks } from '@/app/_components/boards/statuses/status/tasks';
import { StatusProps } from '@/app/_components/boards/statuses/status/types';
import { Droppable } from 'react-beautiful-dnd';

export const Status: React.FC<StatusProps> = ({ status }: StatusProps) => {
    return (
        <Droppable droppableId={`droppable-status-${status.id}`} type="TASK">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    className={`bg-slate-200 min-w-72 h-full border-slate-300 border-[1px] shadow-md rounded-md
                    ${snapshot?.isDraggingOver && 'bg-blue-100'}`}
                    {...provided.droppableProps}
                >
                    <StatusHeader status={status} />

                    <Tasks statusId={status.id} />

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
