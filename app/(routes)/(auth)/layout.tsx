import { AuthFormsBottomLinks } from '@/app/_components/auth/bottom-links';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section className="flex justify-center min-h-[100vh] items-center">
			<section className="lg:w-1/3 sm:w-1/2 w-[90%] bg-white p-10 rounded-lg shadow-md">
				{children}

				<AuthFormsBottomLinks />
			</section>
		</section>
	);
};

export default AuthLayout;
