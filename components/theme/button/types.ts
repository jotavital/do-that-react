import { JSX, ReactNode } from 'react';

interface CustomButtonProps {
	title?: string;
	icon?: ReactNode;
}

type HTMLButtonProps = JSX.IntrinsicElements['button'];

export type ButtonProps = CustomButtonProps & HTMLButtonProps;
