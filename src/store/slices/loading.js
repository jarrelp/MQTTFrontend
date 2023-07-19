import { createSlice } from '@reduxjs/toolkit';
import { getDepartmentsList } from './departments';
import { getActiveQuestionsList } from './activeQuestion';

// ==============================|| SLICE - LOADING ||============================== //

const slice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        toggleLoading: (state) => !state
    },
    extraReducers: {
        [getDepartmentsList.pending]: () => true,
        [getDepartmentsList.fulfilled]: () => false,
        [getDepartmentsList.rejected]: () => false

        // [getActiveQuestionsList.pending]: () => true,
        // [getActiveQuestionsList.fulfilled]: () => false,
        // [getActiveQuestionsList.rejected]: () => false
    }
});

export const selectLoading = (state) => state.loading;

export const { toggleLoading } = slice.actions;
export default slice.reducer;
