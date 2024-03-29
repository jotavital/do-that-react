import { SignInForm } from '@/app/_components/signin/form';
import { NextPage } from 'next';

const SignInPage: NextPage = () => {
	return (
		<div className="flex justify-center min-h-[100vh] items-center">
			<div className="lg:w-1/3 sm:w-1/2 w-[90%] bg-white p-10 rounded-lg shadow-md">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-semibold">Bem-vindo</h1>
					<p>Faça o login para continuar</p>
				</div>

				<SignInForm />
			</div>
		</div>
	);
};

export default SignInPage;
