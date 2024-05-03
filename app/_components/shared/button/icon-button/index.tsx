import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    icon: React.ReactNode;
    callback?: () => void;
}

export const IconButton: React.FC<Props & JSX.IntrinsicElements['input']> = ({
    icon,
    callback,
    ...rest
}: Props & JSX.IntrinsicElements['div']) => {
    return (
        <div
            className={twMerge(
                'flex justify-center hover:bg-slate-100 p-1 rounded-md cursor-pointer',
                rest?.className,
            )}
            onClick={() => callback && callback()}
        >
            {icon}
        </div>
    );
};
