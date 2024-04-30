import {
    ButtonColors,
    ButtonVariants,
} from '@/app/_components/shared/button/types';
import { twMerge } from 'tailwind-merge';

interface Props {
    color: ButtonColors;
    variant?: ButtonVariants;
    customClassName?: string;
}

export const useButtonClassnames = ({
    color,
    variant,
    customClassName,
}: Props) => {
    const isOutline = variant === 'outline';

    const styledButtonClassnames = `rounded-lg py-2 px-3 text-md font-bold text-white shadow-md transition-all
    focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none
    disabled:opacity-50 disabled:shadow-none hover:shadow-lg flex items-center
    justify-center gap-2 h-[3rem] w-[100%]`;

    const unstyledButtonClassnames = 'flex items-center justify-center gap-2';

    const colorClassnames = {
        primary: `bg-primary shadow-primary/20 hover:shadow-primary/40 border-primary ${isOutline && 'text-primary'}`,
        green: `bg-green-500 shadow-green-500/20 hover:shadow-green-500/40 border-green-500 ${isOutline && 'text-green-500'}`,
        red: `bg-red-500 shadow-red-500/20 hover:shadow-red-500/40 border-red-500 ${isOutline && 'text-red-500'}`,
        none: '',
    };

    const variantClassnames = {
        outline: `bg-transparent border-2 font-semibold shadow-none`,
    };

    let buttonClassname = twMerge(
        styledButtonClassnames,
        colorClassnames[color],
        variant && variantClassnames[variant],
        customClassName,
    );

    if (color === 'none') {
        buttonClassname = twMerge(unstyledButtonClassnames, customClassName);
    }

    return { buttonClassname };
};
