import { StatusProps } from '@/app/_components/boards/statuses/status/types';
import React from 'react';
import { IconButton } from '@/app/_components/shared/button/icon-button';
import { IoMdAdd } from 'react-icons/io';
import { useTaskModalsContext } from '@/app/_contexts/task/modals';

export const StatusHeader: React.FC<StatusProps> = ({
    status,
}: StatusProps) => {
    const headerClassnames = {
        red: 'border-l-red-500',
        green: 'border-l-green-500',
        blue: 'border-l-blue-500',
    };

    const titleClassnames = {
        red: 'text-red-500',
        green: 'text-green-500',
        blue: 'text-blue-500',
    };

    const { setIsCreateModalOpen } = useTaskModalsContext();

    return (
        <>
            <div
                className={`min-h-12 p-3 border-l-4 rounded-bl-sm rounded-tl-md flex items-center
                justify-between ${headerClassnames[status.color]}`}
            >
                <h1
                    className={`text-lg font-semibold ${titleClassnames[status.color]}`}
                >
                    {status.title}
                </h1>

                <IconButton
                    icon={<IoMdAdd className="text-xl" />}
                    callback={() => setIsCreateModalOpen(true)}
                />
            </div>
        </>
    );
};
