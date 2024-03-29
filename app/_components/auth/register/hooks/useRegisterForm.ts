import { RegisterProps, RegisterSchema } from '@/app/_types/Register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useRegisterForm = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<RegisterProps>({ resolver: zodResolver(RegisterSchema) });

	const handleRegister = (data: RegisterProps) => {
		console.log('email', data.email);
	};

	const onSubmit = handleSubmit(handleRegister);

	return { errors, onSubmit, register };
};
