import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Task } from './task-types';

const initialState = { taskList: [] as Task[] };

export const tasksSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTaskList: (state, action: PayloadAction<Task[]>) => {
            state.taskList = action.payload;
        },
        createTask: (state, action: PayloadAction<Task>) => {}
    }
});

export const { setTaskList, createTask } = tasksSlice.actions;
export default tasksSlice.reducer;
