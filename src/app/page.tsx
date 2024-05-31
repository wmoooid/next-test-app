import { redirect } from 'next/navigation';

import TaskManager from '@/components/task-manager';
import { MOCK_TASK_LIST } from '@/shared/constants/mock-tasks';
import { LOGIN_ROUTE } from '@/shared/constants/routes';
import StoreProvider from '@/shared/lib/redux/provider/store-provider';
import { getSession } from '@/shared/lib/session/actions';

export default async function Home() {
    const session = await getSession();

    if (!session.isLoggedIn) {
        redirect(LOGIN_ROUTE);
    }

    return (
        <>
            <StoreProvider taskList={MOCK_TASK_LIST} userInfo={session}>
                <TaskManager />
            </StoreProvider>
        </>
    );
}
