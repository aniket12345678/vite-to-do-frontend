import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user_id: ''
    },
    reducers: {
        setCredentials: (state, action) => {
            console.log('state:- ', state);
        }
    }
});

export const { setCredentials } = AuthSlice.actions;
export default AuthSlice.reducer;