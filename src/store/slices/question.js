// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getQuestionsList = createAsyncThunk('/api/questions/getbyquiz', async (id) => {
    try {
        const response = await axios.get(`/api/questions/byquiz/${id}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const getQuestionsListActive = createAsyncThunk('/api/questions/get', async () => {
    try {
        const response = await axios.get('/api/questions/byactivequiz');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addQuestion = createAsyncThunk('/api/questions/post', async (question) => {
    try {
        const response = await axios.post('/api/questions', question);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteQuestion = createAsyncThunk('/api/questions/delete', async (questionId) => {
    try {
        const response = await axios.delete(`/api/questions/${questionId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateQuestion = createAsyncThunk('/api/questions/put', async (question) => {
    try {
        const response = await axios.put(`/api/questions/${question.id}`, question);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'questions',
    initialState: [],
    extraReducers: {
        [getQuestionsList.fulfilled]: (state, { payload }) => payload,
        [addQuestion.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteQuestion.fulfilled]: (state, { payload }) => {
            let questionIdx = state.findIndex((question) => question.id === parseInt(payload));
            state.splice(questionIdx, 1);
        },
        [updateQuestion.fulfilled]: (state, { payload }) => {
            let questionIdx = state.findIndex((question) => question.id === parseInt(payload.id));
            state.splice(questionIdx, 1, payload);
        }
    }
});

export const selectQuestions = (state) => state.question;

export default slice.reducer;
