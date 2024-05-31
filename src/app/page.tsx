import { redirect } from 'next/navigation';

import TaskManager from '@/components/task-manager';
import { Task } from '@/components/task-manager/model/types';
import StoreProvider from '@/lib/redux/provider/store-provider';
import { getSession } from '@/lib/session/actions';

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
    },
    {
        id: '4',
        name: 'Помыть посуду',
        email: 'ivan@mail.ru',
        text: 'Помыть посуду',
        isCompleted: false,
        isFiltered: false
    }
];

export default async function Home() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect('/login');
    }

    return (
        <>
            <StoreProvider taskList={MOCK_TASK_LIST} userInfo={session}>
                <TaskManager />
            </StoreProvider>
        </>
    );
}
