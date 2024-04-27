import { AppProviders } from '@/app/(routes)/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './styles.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Do That',
    description: 'Simple TODO App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={inter.className} id="root">
                <div className={styles.container}>
                    <AppProviders>{children}</AppProviders>
                </div>
            </body>
        </html>
    );
}
