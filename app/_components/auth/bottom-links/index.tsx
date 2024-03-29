'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface LinkMetadata {
	href: string;
	text: string;
}

export const AuthFormsBottomLinks: React.FC = () => {
	const pathname = usePathname();
	let metadata: LinkMetadata = {
		href: 'register',
		text: 'Crie sua conta',
	};

	if (pathname.includes('register')) {
		metadata = {
			href: 'signin',
			text: 'Faça o Login',
		};
	}

	return (
		<section className="mt-5 text-end">
			<Link
				href={metadata.href}
				className="underline-offset-2 underline text-blue-500 font-semibold"
			>
				{metadata.text}
			</Link>
		</section>
	);
};
