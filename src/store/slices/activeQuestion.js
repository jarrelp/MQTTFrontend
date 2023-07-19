// // third-party
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // project imports
// import axios from 'apis/backendApi';

// // ----------------------------------------------------------------------

// export const getActiveQuestionsList = createAsyncThunk('/api/questions/getbyactivequiz', async () => {
//     try {
//         const response = await axios.get('/api/questions/byactivequiz');
//         return response.data;
//     } catch (error) {
//         throw Error(error.message);
//     }
// });

// const slice = createSlice({
//     name: 'activeQuestions',
//     initialState: [],
//     extraReducers: {
//         [getActiveQuestionsList.fulfilled]: (state, { payload }) => payload
//     }
// });

// export const selectActiveQuestions = (state) => state.activeQuestion;

// export default slice.reducer;
