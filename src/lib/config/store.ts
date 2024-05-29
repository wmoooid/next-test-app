import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from '@/components/task-manager/model/tasks-slice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            taskList: tasksReducer
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
