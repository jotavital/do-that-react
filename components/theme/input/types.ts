interface CustomInputProps {
	label?: string;
}

type HTMLInputProps = JSX.IntrinsicElements['input'];

export type InputProps = CustomInputProps & HTMLInputProps;
