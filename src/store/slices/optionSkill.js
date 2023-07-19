// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getOptionSkillsList = createAsyncThunk('/api/optionSkills/getbyoption', async (id) => {
    try {
        const response = await axios.get(`/api/optionSkills/byoption/${id}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addOptionSkill = createAsyncThunk('/api/optionSkills/post', async (optionSkill) => {
    try {
        const response = await axios.post('/api/optionSkills', optionSkill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteOptionSkill = createAsyncThunk('/api/optionSkills/delete', async (optionSkillId) => {
    try {
        const response = await axios.delete(`/api/optionSkills/${optionSkillId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateOptionSkill = createAsyncThunk('/api/optionSkills/put', async (optionSkill) => {
    try {
        const response = await axios.put(`/api/optionSkills/${optionSkill.id}`, optionSkill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'optionSkills',
    initialState: [],
    extraReducers: {
        [getOptionSkillsList.fulfilled]: (state, { payload }) => payload,
        [addOptionSkill.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteOptionSkill.fulfilled]: (state, { payload }) => {
            let optionSkillIdx = state.findIndex((optionSkill) => optionSkill.id == payload);
            state.splice(optionSkillIdx, 1);
        },
        [updateOptionSkill.fulfilled]: (state, { payload }) => {
            let optionSkillIdx = state.findIndex((optionSkill) => optionSkill.id === payload.id);
            state.splice(optionSkillIdx, 1, payload);
        }
    }
});

export const selectOptionSkills = (state) => state.optionSkill;

export default slice.reducer;
