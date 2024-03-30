import { SignInForm } from '@/app/_components/auth/signin/form';
import { NextPage } from 'next';

const SignInPage: NextPage = () => {
	return (
		<>
			<section className="text-center mb-10">
				<h1 className="text-3xl font-semibold mb-1 text-dark">
					Bem-vindo
				</h1>
				<p>Faça o login para continuar</p>
			</section>

			<SignInForm />
		</>
	);
};

export default SignInPage;
