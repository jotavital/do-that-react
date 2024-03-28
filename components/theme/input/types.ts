import { FieldError } from 'react-hook-form';

interface CustomInputProps {
	label?: string;
	errors?: FieldError;
}

type HTMLInputProps = JSX.IntrinsicElements['input'];

export type InputProps = CustomInputProps & HTMLInputProps;
