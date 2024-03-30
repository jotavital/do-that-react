import { SignInProps } from '@/app/_types/SignIn';

export interface FormStep {
	fields: (keyof SignInProps)[];
}

export enum FormStepTypes {
	FIRST = 0,
	LAST = 1,
}
