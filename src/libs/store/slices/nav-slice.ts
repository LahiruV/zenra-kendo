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
        setDrawerToggel: (state, action) => {
            state.drawerToggel = action.payload;
        }
    },
});

export const { setDrawerToggel } = navSlice.actions;
export default navSlice.reducer;
