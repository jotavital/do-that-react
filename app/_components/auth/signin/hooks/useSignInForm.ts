import { api } from '@/app/_lib/axios';
import { SendAuthenticationCodeResponse } from '@/app/_types/Authentication';
import { FormStep, SignInFormSteps } from '@/app/_types/Form';
import { SignInProps, SignInSchema } from '@/app/_types/SignIn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const formSteps: FormStep[] = [
    {
        fields: ['email'],
    },
    {
        fields: ['authentication_code'],
    },
];

export const useSignInForm = () => {
    const formMethods = useForm<SignInProps>({
        resolver: zodResolver(SignInSchema),
    });

    const { handleSubmit, trigger, getValues } = formMethods;

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isSendingAuthenticationCode, setIsSendingAuthenticationCode] =
        useState<boolean>(false);

    const handleSignIn = async (data: SignInProps) => {
        await api.post(`login/${data.authentication_code}`).then((r) => {
            console.log(r);
        });
    };

    const onSubmit = handleSubmit(handleSignIn);

    const handleSendAuthenticationCode = async () => {
        try {
            const email = getValues('email');

            if (!email) {
                return false;
            }

            const codeSent = await api
                .get<SendAuthenticationCodeResponse>(
                    `send-authentication-code?email=${email}`,
                )
                .then((r) => r.data.success);

            return codeSent;
        } catch (error) {
            return false;
        }
    };

    const handleGoToPreviousStep = () => {
        setCurrentStep((previousState) => previousState - 1);
    };

    const handleGoToNextStep = async () => {
        if (currentStep !== SignInFormSteps.AUTHENTICATION_CODE.valueOf()) {
            const isValid = await trigger(formSteps[currentStep].fields, {
                shouldFocus: true,
            });

            if (!isValid) return;

            if (currentStep === SignInFormSteps.EMAIL.valueOf()) {
                setIsSendingAuthenticationCode(true);

                const codeSent = await handleSendAuthenticationCode();

                setIsSendingAuthenticationCode(false);

                if (!codeSent) {
                    return;
                }

                return setCurrentStep((previousState) => previousState + 1);
            }

            return;
        }

        return onSubmit();
    };

    return {
        onSubmit,
        formMethods,
        handleGoToPreviousStep,
        handleGoToNextStep,
        currentStep,
        isSendingAuthenticationCode,
    };
};
