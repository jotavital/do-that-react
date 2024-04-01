import { SignInProps } from '@/app/_types/SignIn';

export interface FormStep {
    fields: (keyof SignInProps)[];
}

export enum SignInFormSteps {
    EMAIL = 0,
    AUTHENTICATION_CODE = 1,
}
