import { SignInProps } from '@/app/_types/SignIn';

export interface FormStep {
	fields: (keyof SignInProps)[];
}

export enum SignInFormSteps {
	EMAIL = 0,
	ACCESS_CODE = 1,
}
