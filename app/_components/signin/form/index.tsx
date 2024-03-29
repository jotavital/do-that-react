'use client';

import { SignInProps, SignInSchema } from '@/app/_types/SignIn';
import { Button } from '@/app/_components/shared/button';
import { Input } from '@/app/_components/shared/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa6';

export const SignInForm: React.FC = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<SignInProps>({ resolver: zodResolver(SignInSchema) });

	const handleSignIn = (data: SignInProps) => {
		console.log('email', data.email);
	};

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			className="flex flex-col gap-4"
		>
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
