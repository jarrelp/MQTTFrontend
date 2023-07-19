// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getSkillsList = createAsyncThunk('/api/skills/get', async () => {
    try {
        const response = await axios.get('/api/skills');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addSkill = createAsyncThunk('/api/skills/post', async (skill) => {
    try {
        const response = await axios.post('/api/skills', skill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteSkill = createAsyncThunk('/api/skills/delete', async (skillId) => {
    try {
        const response = await axios.delete(`/api/skills/${skillId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateSkill = createAsyncThunk('/api/skills/put', async (skill) => {
    try {
        const response = await axios.put(`/api/skills/${skill.id}`, skill);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'skills',
    initialState: [],
    extraReducers: {
        [getSkillsList.fulfilled]: (state, { payload }) => payload,
        [addSkill.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteSkill.fulfilled]: (state, { payload }) => {
            let skillIdx = state.findIndex((skill) => skill.id === parseInt(payload));
            state.splice(skillIdx, 1);
        },
        [updateSkill.fulfilled]: (state, { payload }) => {
            let skillIdx = state.findIndex((skill) => skill.id === parseInt(payload.id));
            state.splice(skillIdx, 1, payload);
        }
    }
});

export const selectSkills = (state) => state.skill;

export default slice.reducer;
