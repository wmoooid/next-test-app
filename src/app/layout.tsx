import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Task } from '@/components/task-manager/model/types';
import StoreProvider from '@/lib/provider/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next task manager',
    description: 'Testwork'
};

export const dynamic = 'force-dynamic';

const MOCK_TASK_LIST: Array<Task> = [
    {
        id: '1',
        name: 'Покормить кота',
        email: 'foo@bar.com',
        text: 'Срочно покормить кота, пока не стало слишком поздно',
        isCompleted: false,
        isFiltered: false
    },
    {
        id: '2',
        name: 'Поесть',
        email: 'fizz@buzz.com',
        text: 'Купить еды, приготовить и поесть',
        isCompleted: true,
        isFiltered: false
    },
    {
        id: '3',
        name: 'Поспать',
        email: 'ivan@mail.ru',
        text: 'Спать очень важно',
        isCompleted: false,
        isFiltered: false
    }
];

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <StoreProvider taskList={MOCK_TASK_LIST}>
                    <Header />
                    <main className='container'>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
