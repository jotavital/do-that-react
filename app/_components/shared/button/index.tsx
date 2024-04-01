import { useButtonClassnames } from '@/app/_components/shared/button/hooks/useButtonClassnames';
import { ButtonProps } from '@/app/_components/shared/button/types';
import { Loading } from '@/app/_components/shared/loading';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({
    title,
    icon,
    type,
    leftIcon,
    color = 'primary',
    variant,
    className,
    isLoading = false,
    ...rest
}: ButtonProps) => {
    const { buttonClassname } = useButtonClassnames({
        color,
        variant,
        customClassName: className,
    });

    return (
        <button
            className={buttonClassname}
            data-ripple-light="true"
            type={type ?? 'button'}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {leftIcon} {title} {icon}
                </>
            )}
        </button>
    );
};
