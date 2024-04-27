import { useAuthContext } from '../../../../_contexts/auth';
import { AuthenticationService } from '@/app/_services/AuthenticationService';
import { SignInProps, SignInSchema } from '@/app/_types/Authentication';
import { FormStep, SignInFormSteps } from '@/app/_types/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const formSteps: FormStep[] = [
    {
        fields: ['email'],
    },
    {
        fields: ['authentication_code'],
    },
];

export const useSignInForm = () => {
    const router = useRouter();
    const { setUser } = useAuthContext();
    const formMethods = useForm<SignInProps>({
        resolver: zodResolver(SignInSchema),
    });

    const { handleSubmit, trigger, getValues } = formMethods;

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isSendingAuthenticationCode, setIsSendingAuthenticationCode] =
        useState<boolean>(false);

    const handleSignIn = async (data: SignInProps) => {
        try {
            const signInResponse = await AuthenticationService.signIn(data);

            setUser(signInResponse.user);
            toast.success('Login autorizado.');

            router.push('dashboard');
        } catch (error) {
            toast.error('Erro ao fazer o login.');
            console.error(error);
        }
    };

    const onSubmit = handleSubmit(handleSignIn);

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
                const email = getValues('email');

                const codeSent =
                    await AuthenticationService.sendAuthenticationCode(email);

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
