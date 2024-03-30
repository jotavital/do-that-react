'use client';

import { useSignInForm } from '@/app/_components/auth/signin/hooks/useSignInForm';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

enum SignInFormSteps {
	FIRST = 1, //ask for code
	LAST = 2, // submit code
}

export const SignInForm: React.FC = () => {
	const [step, setStep] = useState<number>(SignInFormSteps.FIRST);
	const { onSubmit, register, errors } = useSignInForm();

	const handleGoToPreviousStep = () => {
		setStep((previousState) => previousState - 1);
	};

	const handleClickSubmitButton = () => {
		if (step !== SignInFormSteps.LAST.valueOf()) {
			return setStep((previousState) => previousState + 1);
		}

		return onSubmit();
	};

	return (
		<form className="flex flex-col gap-6">
			{step === SignInFormSteps.FIRST.valueOf() ? (
				<Input
					label="E-mail"
					id="email"
					placeholder="jondoe@foo.com.br"
					errors={errors.email}
					{...register('email')}
				/>
			) : step === SignInFormSteps.LAST.valueOf() ? (
				<Input
					label="Código de Acesso"
					id="code"
					placeholder="123456"
					errors={errors.code}
					{...register('code')}
					type="code"
				/>
			) : null}

			<div className="flex gap-2 ">
				{step !== SignInFormSteps.FIRST.valueOf() && (
					<Button
						title="Voltar"
						type="button"
						color="none"
						className="font-semibold text-red-500 w-1/2"
						onClick={() => handleGoToPreviousStep()}
					/>
				)}
				<Button
					title="Fazer o Login"
					icon={<FaArrowRight className="text-md" />}
					type="button"
					onClick={() => handleClickSubmitButton()}
				/>
			</div>
		</form>
	);
};
