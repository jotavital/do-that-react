import { ButtonProps } from '@/src/components/theme/button/types';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({
	title,
	icon,
	type,
	...rest
}: ButtonProps) => {
	return (
		<button
			className="rounded-lg bg-green-500 py-2 px-3 text-md font-bold text-white shadow-md
				shadow-green-500/20 transition-all focus:opacity-[0.85] active:opacity-[0.85]
				disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
				hover:shadow-lg hover:shadow-green-500/40 flex items-center justify-center gap-2
				min-h-[3rem]"
			data-ripple-light="true"
			type={type ?? 'button'}
			{...rest}
		>
			{title}
			{icon}
		</button>
	);
};
