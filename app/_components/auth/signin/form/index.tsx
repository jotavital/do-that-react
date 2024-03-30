'use client';

import { useSignInForm } from '@/app/_components/auth/signin/hooks/useSignInForm';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import { FormStepTypes } from '@/app/_types/Form';
import { preventSubmitOnEnter } from '@/app/_utils/form';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export const SignInForm: React.FC = () => {
	const {
		formMethods: {
			register,
			formState: { errors },
		},
		currentStep,
		handleGoToNextStep,
		handleGoToPreviousStep,
	} = useSignInForm();

	return (
		<form className="flex flex-col gap-6" onKeyDown={preventSubmitOnEnter}>
			{currentStep === FormStepTypes.FIRST.valueOf() ? (
				<Input
					label="E-mail"
					id="email"
					placeholder="jondoe@foo.com.br"
					errors={errors.email}
					{...register('email')}
					key={'email'}
				/>
			) : currentStep === FormStepTypes.LAST.valueOf() ? (
				<Input
					label="Código de Acesso"
					id="access_code"
					placeholder="123456"
					errors={errors.access_code}
					{...register('access_code')}
					key={'access_code'}
				/>
			) : null}

			<div className="flex gap-2 ">
				{currentStep !== FormStepTypes.FIRST.valueOf() && (
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
					onClick={() => handleGoToNextStep()}
				/>
			</div>
		</form>
	);
};
