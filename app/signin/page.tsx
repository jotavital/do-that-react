import { FaArrowRight } from 'react-icons/fa6';

const SignInPage = () => {
	return (
		<div className="flex justify-center min-h-[100vh] items-center">
			<div className="lg:w-1/3 w-1/2 bg-white p-10 rounded-lg shadow-md">
				<div className="text-center ">
					<h1 className="text-2xl font-semibold">Bem-vindo</h1>
					<p>Faça o login para continuar</p>
				</div>

				<div>
					<label
						htmlFor="email"
						className="text-sm font-medium text-gray-900 dark:text-white"
					>
						E-mail
					</label>
					<input
						type="text"
						id="email"
						className="appearance-none border border-gray-300 text-sm rounded-lg focus:ring-blue-500
							focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
							dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
							dark:focus:border-blue-500 focus:outline-none"
						placeholder="jondoe@foo.com.br"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="text-sm font-medium text-gray-900 dark:text-white"
					>
						Senha
					</label>
					<input
						type="password"
						id="password"
						className="appearance-none border border-gray-300 text-sm rounded-lg focus:ring-blue-500
							focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
							dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
							dark:focus:border-blue-500 focus:outline-none"
						placeholder="********"
						required
					/>
				</div>

				<button
					className="rounded-lg bg-green-500 py-2 px-3 text-sm font-bold text-white shadow-md
						shadow-green-500/20 transition-all focus:opacity-[0.85] active:opacity-[0.85]
						disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
						hover:shadow-lg hover:shadow-green-500/40 flex items-center gap-2"
					data-ripple-light="true"
					type="button"
				>
					Fazer o Login
					<FaArrowRight className="text-md" />
				</button>
			</div>
		</div>
	);
};

export default SignInPage;
