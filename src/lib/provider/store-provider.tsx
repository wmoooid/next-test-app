'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { Task } from '@/components/task-manager/model/task-types';
import { setTaskList } from '@/components/task-manager/model/tasks-slice';

import { AppStore, makeStore } from '../config/store';

type StoreProviderProps = {
    children: React.ReactNode;
    taskList: Array<Task>;
};

export default function StoreProvider({ children, taskList }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        storeRef.current.dispatch(setTaskList(taskList));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
