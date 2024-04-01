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
		fields: ['access_code'],
	},
];

export const useSignInForm = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const formMethods = useForm<SignInProps>({
		resolver: zodResolver(SignInSchema),
	});
	const { handleSubmit, trigger } = formMethods;

	const handleSignIn = (data: SignInProps) => {
		console.log('email', data.email);
	};

	const onSubmit = handleSubmit(handleSignIn);

	const handleGoToPreviousStep = () => {
		setCurrentStep((previousState) => previousState - 1);
	};

	const handleGoToNextStep = async () => {
		if (currentStep !== SignInFormSteps.ACCESS_CODE.valueOf()) {
			const isValid = await trigger(formSteps[currentStep].fields, {
				shouldFocus: true,
			});

			if (isValid) {
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
	};
};
