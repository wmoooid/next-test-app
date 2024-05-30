import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import filterReducer, { setFilter } from '@/components/task-manager/model/filter-slice';
import tasksReducer, { filterTask } from '@/components/task-manager/model/tasks-slice';

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
    actionCreator: setFilter,
    effect: async (_, listenerApi) => {
        const filterState = listenerApi.getState().filterList;
        listenerApi.dispatch(filterTask(filterState));
    }
});

export const makeStore = () => {
    return configureStore({
        reducer: {
            taskList: tasksReducer,
            filterList: filterReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
