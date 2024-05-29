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
        createTask: (state, action: PayloadAction<Pick<Task, 'name' | 'text'>>) => {
            const { name, text } = action.payload;

            state.taskList.push({
                id: crypto.randomUUID(),
                name,
                text,
                creator: 'foo@bar.com',
                isCompleted: false
            });
        },
        editTask: (state, action: PayloadAction<Partial<Task>>) => {
            const task = state.taskList.find((task) => task.id === action.payload.id);
            if (task) {
                Object.assign(task, action.payload);
            }
        }
    }
});

export const { setTaskList, createTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
