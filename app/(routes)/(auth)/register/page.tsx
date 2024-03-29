import { RegisterForm } from '@/app/_components/auth/register/form';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
	return (
		<>
			<div className="text-center mb-6">
				<h1 className="text-3xl font-semibold mb-1">Criar sua Conta</h1>
				<p>Crie sua conta para continuar</p>
			</div>

			<RegisterForm />
		</>
	);
};

export default RegisterPage;
