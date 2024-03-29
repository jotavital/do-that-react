import { SignInProps, SignInSchema } from '@/app/_types/SignIn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useSignInForm = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<SignInProps>({ resolver: zodResolver(SignInSchema) });

	const handleSignIn = (data: SignInProps) => {
		console.log('email', data.email);
	};

	const onSubmit = handleSubmit(handleSignIn);

	return { errors, onSubmit, register };
};
