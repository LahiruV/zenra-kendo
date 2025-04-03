import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
    theme: 'light' | 'dark';
    themeButton: boolean;
};

const initialState: ThemeState = {
    theme: 'light',
    themeButton: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setThemeButton: (state, action) => {
            state.themeButton = action.payload;
        },
    },
});

export const { } = themeSlice.actions;
export default themeSlice.reducer;
