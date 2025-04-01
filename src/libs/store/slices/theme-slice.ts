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
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            state.themeButton = !state.themeButton;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setThemeButton: (state, action) => {
            state.themeButton = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
