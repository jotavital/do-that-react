import { SignInProps } from '@/app/_types/Authentication';

export interface FormStep {
    fields: (keyof SignInProps)[];
}

export enum SignInFormSteps {
    EMAIL = 0,
    AUTHENTICATION_CODE = 1,
}
