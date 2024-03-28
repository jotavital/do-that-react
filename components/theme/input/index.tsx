import { InputProps } from '@/components/theme/input/types';
import React from 'react';

export const Input: React.FC<InputProps> = ({
	label,
	id,
	required,
	type = 'text',
	placeholder,
	name,
	...rest
}: InputProps) => {
	return (
		<div>
			<label
				htmlFor={id}
				className="text-sm font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				className="appearance-none border border-gray-300 text-sm rounded-lg focus:ring-blue-500
					focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
					dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
					dark:focus:border-blue-500 focus:outline-none"
				placeholder={placeholder}
				required={required}
				{...rest}
			/>
		</div>
	);
};
