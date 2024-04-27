import React from 'react';

interface Props {
    icon: React.ReactNode;
    callback?: () => void;
}

export const IconButton: React.FC<Props> = ({ icon, callback }: Props) => {
    return (
        <div
            className="flex justify-center hover:bg-slate-100 p-1 rounded-md cursor-pointer"
            onClick={() => callback && callback()}
        >
            {icon}
        </div>
    );
};
