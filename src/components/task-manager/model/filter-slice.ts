import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskFilter } from './types';

const initialState: TaskFilter = { query: '', sort: false, completed: false };

export const filterSlice = createSlice({
    name: 'filterState',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<Partial<TaskFilter>>) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
