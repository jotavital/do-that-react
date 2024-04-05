'use client';

import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const hasAccessTokenCookie = hasCookie(
        process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? 'dothat@accessToken',
    );

    if (!hasAccessTokenCookie) {
        router.push('signin');
    }

    return <div>{children}</div>;
}
