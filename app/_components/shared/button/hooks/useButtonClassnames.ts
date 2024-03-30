import {
	ButtonColors,
	ButtonVariants,
} from '@/app/_components/shared/button/types';
import { twMerge } from 'tailwind-merge';

interface Props {
	color: ButtonColors;
	variant?: ButtonVariants;
}

export const useButtonClassnames = ({ color, variant }: Props) => {
	const styledButtonClassnames = `rounded-lg py-2 px-3 text-md font-bold text-white shadow-md transition-all
    focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none
    disabled:opacity-50 disabled:shadow-none hover:shadow-lg flex items-center
    justify-center gap-2 min-h-[3rem] w-[100%]`;

	const unstyledButtonClassnames = 'flex items-center justify-center gap-2';

	const colorClassnames = `bg-${color}-500 shadow-${color}-500/20 hover:shadow-${color}-500/40 border-${color}-500`;

	const getVariantClassnames = () => {
		switch (variant) {
			case 'outline':
				return `bg-transparent border-2 font-semibold text-${color}-500 shadow-none`;
		}
	};

	let buttonClassname = twMerge(
		styledButtonClassnames,
		colorClassnames,
		getVariantClassnames(),
	);

	if (color === 'none') {
		buttonClassname = unstyledButtonClassnames;
	}

	return { buttonClassname };
};
