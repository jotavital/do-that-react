import { StatusProps } from '@/app/_components/boards/statuses/status/types';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';

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

    return (
        <div
            className={`min-h-12 p-3 border-l-4 rounded-bl-sm rounded-tl-md flex items-center
            justify-between ${headerClassnames[status.color]}`}
        >
            <h1
                className={`text-lg font-semibold ${titleClassnames[status.color]}`}
            >
                {status.title}
            </h1>
            <div className="hover:bg-slate-100 p-1 rounded-md cursor-pointer">
                <IoMdAdd className="text-xl" />
            </div>
        </div>
    );
};
