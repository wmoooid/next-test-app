import Header from '@/components/header';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next task manager',
    description: 'Testwork'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                <main className='container'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
