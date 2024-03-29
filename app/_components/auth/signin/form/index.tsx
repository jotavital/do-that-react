'use client';

import { useSignInForm } from '@/app/_components/auth/signin/hooks/useSignInForm';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export const SignInForm: React.FC = () => {
	const { onSubmit, register, errors } = useSignInForm();

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			<Input
				label="E-mail"
				id="email"
				placeholder="jondoe@foo.com.br"
				errors={errors.email}
				{...register('email')}
			/>

			<Button
				title="Fazer o Login"
				icon={<FaArrowRight className="text-md" />}
				type="submit"
			/>
		</form>
	);
};
