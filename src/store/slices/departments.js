// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getDepartmentsList = createAsyncThunk('/api/departments/get', async () => {
    try {
        const response = await axios.get('/api/departments');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addDepartment = createAsyncThunk('/api/departments/post', async (department) => {
    try {
        const response = await axios.post('/api/departments', department);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteDepartment = createAsyncThunk('/api/departments/delete', async (departmentId) => {
    try {
        const response = await axios.delete(`/api/departments/${departmentId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateDepartment = createAsyncThunk('/api/departments/put', async (department) => {
    try {
        const response = await axios.put(`/api/departments/${department.id}`, department);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'departments',
    initialState: [],
    extraReducers: {
        [getDepartmentsList.fulfilled]: (state, { payload }) => payload,
        [addDepartment.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteDepartment.fulfilled]: (state, { payload }) => {
            let departmentIdx = state.findIndex((department) => department.id === parseInt(payload));
            state.splice(departmentIdx, 1);
        },
        [updateDepartment.fulfilled]: (state, { payload }) => {
            let departmentIdx = state.findIndex((department) => department.id === parseInt(payload.id));
            state.splice(departmentIdx, 1, payload);
        }
    }
});

export const selectDepartments = (state) => state.department;

export default slice.reducer;
