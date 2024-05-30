import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Task, TaskFilter } from './types';

const initialState = { taskList: [] as Task[] };

export const tasksSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTaskList: (state, action: PayloadAction<Task[]>) => {
            state.taskList = action.payload;
        },
        createTask: (state, action: PayloadAction<Pick<Task, 'name' | 'text' | 'email'>>) => {
            const { name, text, email } = action.payload;

            state.taskList.unshift({
                id: crypto.randomUUID(),
                name,
                text,
                email,
                isCompleted: false
            });
        },
        editTask: (state, action: PayloadAction<Partial<Task>>) => {
            const task = state.taskList.find((task) => task.id === action.payload.id);
            if (task) {
                Object.assign(task, action.payload);
            }
        },
        filterTask: (state, action: PayloadAction<Partial<TaskFilter>>) => {
            const { query, sort, completed } = action.payload;

            state.taskList = state.taskList.map((task) => {
                if (query) {
                    if (!task.name.toLowerCase().includes(query.toLowerCase()) && !task.text.toLowerCase().includes(query.toLowerCase()) && !task.email.toLowerCase().includes(query.toLowerCase())) {
                        return { ...task, isFiltered: true };
                    }
                }
                if (completed) {
                    if (task.isCompleted !== completed) {
                        return { ...task, isFiltered: true };
                    }
                }
                return { ...task, isFiltered: false };
            });
        }
    }
});

export const { setTaskList, createTask, editTask, filterTask } = tasksSlice.actions;
export default tasksSlice.reducer;
