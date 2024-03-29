import { api } from '@/app/_lib/axios';
import { RegisterProps, RegisterSchema } from '@/app/_types/Register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const useRegisterForm = () => {
	const router = useRouter();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<RegisterProps>({ resolver: zodResolver(RegisterSchema) });

	const handleRegister = (data: RegisterProps) => {
		void api.post('register', data).then(() => {
			toast.success('Cadastro realizado com sucesso.');

			router.push('signin');
		});
	};

	const onSubmit = handleSubmit(handleRegister);

	return { errors, onSubmit, register };
};
