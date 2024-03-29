'use client';

import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import { useSignInForm } from '@/app/_components/signin/hooks/useSignInForm';
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

			<Input
				label="Senha"
				id="password"
				placeholder="********"
				type="password"
				errors={errors.password}
				{...register('password')}
			/>

			<Button
				title="Fazer o Login"
				icon={<FaArrowRight className="text-md" />}
				type="submit"
			/>
		</form>
	);
};
