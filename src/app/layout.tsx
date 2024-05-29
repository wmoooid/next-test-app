import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { Task } from '@/components/task-manager/model/task-types';
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
        name: 'Помыть кота',
        creator: 'foo@bar.com',
        text: 'Срочно помыть кота, пока не стало слишком поздно',
        isCompleted: false
    },
    {
        id: '2',
        name: 'Поесть',
        creator: 'foo@bar.com',
        text: 'Купить еды, приготовить и поесть',
        isCompleted: true
    },
    {
        id: '3',
        name: 'Поспать',
        creator: 'foo@bar.com',
        text: 'Спать очень важно',
        isCompleted: false
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
