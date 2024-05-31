import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SessionData } from '@/lib/session/lib';

const initialState: Partial<SessionData> = {
    email: '',
    isAdmin: false,
    isLoggedIn: false
};

export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<typeof initialState>) => {
            Object.assign(state, action.payload);
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
