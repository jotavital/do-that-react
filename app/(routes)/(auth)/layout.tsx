'use client';

import { AuthFormsBottomLinks } from '@/app/_components/auth/bottom-links';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const hasAccessTokenCookie = hasCookie(
        process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
    );

    if (hasAccessTokenCookie) {
        router.push('dashboard');
    }

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
