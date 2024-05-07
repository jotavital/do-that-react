import { IconButton } from '@/app/_components/shared/button/icon-button';
import { FaRegTrashCan } from 'react-icons/fa6';
import React from 'react';
import { useDeleteTask } from '@/app/_hooks/tasks/useDeleteTask';

interface Props {
    taskId: string;
    statusId: string;
}

export const TaskActions: React.FC<Props> = ({ taskId, statusId }: Props) => {
    const { handleDeleteTask } = useDeleteTask();

    return (
        <div
            className={
                'hidden group-hover:flex items-center flex-col text-dark w-2/12'
            }
        >
            <IconButton
                icon={<FaRegTrashCan />}
                className="p-2"
                callback={() => handleDeleteTask(taskId, statusId)}
            />
        </div>
    );
};
