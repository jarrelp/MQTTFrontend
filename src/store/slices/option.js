// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getOptionsList = createAsyncThunk('/api/options/getbyquestion', async (id) => {
    try {
        const response = await axios.get(`/api/options/byquestion/${id}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addOption = createAsyncThunk('/api/options/post', async (option) => {
    try {
        const response = await axios.post('/api/options', option);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteOption = createAsyncThunk('/api/options/delete', async (optionId) => {
    try {
        const response = await axios.delete(`/api/options/${optionId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateOption = createAsyncThunk('/api/options/put', async (option) => {
    try {
        const response = await axios.put(`/api/options/${option.id}`, option);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'options',
    initialState: [],
    extraReducers: {
        [getOptionsList.fulfilled]: (state, { payload }) => payload,
        [addOption.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteOption.fulfilled]: (state, { payload }) => {
            let optionIdx = state.findIndex((option) => option.id === parseInt(payload));
            state.splice(optionIdx, 1);
        },
        [updateOption.fulfilled]: (state, { payload }) => {
            let optionIdx = state.findIndex((option) => option.id === parseInt(payload.id));
            state.splice(optionIdx, 1, payload);
        }
    }
});

export const selectOptions = (state) => state.option;

export default slice.reducer;
