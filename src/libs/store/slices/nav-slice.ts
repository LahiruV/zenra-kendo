import { createSlice } from '@reduxjs/toolkit';

type NavState = {
    drawerToggel: boolean;
};

const initialState: NavState = {
    drawerToggel: false,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        drawerToggel: (state) => {
            state.drawerToggel = !state.drawerToggel;
        },
    },
});

export const { drawerToggel } = navSlice.actions;
export default navSlice.reducer;
