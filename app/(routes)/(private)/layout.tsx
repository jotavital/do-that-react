'use client';

import { useAuthContext } from '@/app/_contexts/AuthContext';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Avatar from 'react-avatar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        const hasAccessTokenCookie = hasCookie(
            process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
        );

        if (!hasAccessTokenCookie) {
            router.push('signin');
        }
    }, []);

    return (
        <section>
            <section className="bg-slate-800 h-[60px] flex items-center justify-end px-3">
                <Avatar name={user?.name} size="40" className="rounded-full" />
            </section>
            {children}
        </section>
    );
}
