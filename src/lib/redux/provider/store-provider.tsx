'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { setUser } from '@/app/model/user-slice';
import { setTaskList } from '@/components/task-manager/model/tasks-slice';
import { Task } from '@/components/task-manager/model/types';
import { SessionData } from '@/lib/session/lib';

import { AppStore, makeStore } from '../config/store';

type StoreProviderProps = {
    children: React.ReactNode;
    taskList: Array<Task>;
    userInfo: Partial<SessionData>;
};

export default function StoreProvider({ children, taskList, userInfo }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        storeRef.current.dispatch(setTaskList(taskList));
        storeRef.current.dispatch(setUser(userInfo));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
