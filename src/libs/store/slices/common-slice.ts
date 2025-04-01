import { createSlice } from '@reduxjs/toolkit';

type CommonState = {
    routeTitle: string;
};

const initialState: CommonState = {
    routeTitle: '',
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setRouteTitle: (state, action) => {
            state.routeTitle = action.payload;
        }
    },
});

export const { setRouteTitle } = commonSlice.actions;
export default commonSlice.reducer;
