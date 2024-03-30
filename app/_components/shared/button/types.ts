import { JSX, ReactNode } from 'react';

export type ButtonColors = 'green' | 'red' | 'none' | 'primary';

export type ButtonVariants = 'outline';

interface CustomButtonProps {
	title?: string;
	icon?: ReactNode;
	leftIcon?: ReactNode;
	color?: ButtonColors;
	variant?: ButtonVariants;
}

type HTMLButtonProps = JSX.IntrinsicElements['button'];

export type ButtonProps = CustomButtonProps & HTMLButtonProps;
