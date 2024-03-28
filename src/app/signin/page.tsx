'use client';

import { SignInProps, SignInSchema } from '@/src/app/signin/types';
import { Button } from '@/src/components/theme/button';
import { Input } from '@/src/components/theme/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa6';

const SignInPage = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<SignInProps>({ resolver: zodResolver(SignInSchema) });

	const handleSignIn = (data: SignInProps) => {
		console.log('email', data.email);
	};

	return (
		<div className="flex justify-center min-h-[100vh] items-center">
			<div className="lg:w-1/3 sm:w-1/2 w-[90%] bg-white p-10 rounded-lg shadow-md">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-semibold">Bem-vindo</h1>
					<p>Faça o login para continuar</p>
				</div>

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
			</div>
		</div>
	);
};

export default SignInPage;
