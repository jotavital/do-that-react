import { Button } from '@/components/theme/button';
import { Input } from '@/components/theme/input';
import { FaArrowRight } from 'react-icons/fa6';

const SignInPage = () => {
	return (
		<div className="flex justify-center min-h-[100vh] items-center">
			<div className="lg:w-1/3 w-1/2 bg-white p-10 rounded-lg shadow-md">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-semibold">Bem-vindo</h1>
					<p>Faça o login para continuar</p>
				</div>

				<form action="#" className="flex flex-col gap-4">
					<Input
						label="E-mail"
						id="email"
						name="email"
						placeholder="jondoe@foo.com.br"
					/>

					<Input
						label="Senha"
						id="password"
						name="password"
						placeholder="********"
						type="password"
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
