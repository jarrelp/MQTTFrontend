// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    users: []
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET DEPARTMENTS
        getUsersListSuccess(state, action) {
            state.users = action.payload;
        },

        // ADD DEPARTMENT
        addUserSuccess(state, action) {
            state.users = action.payload.users;
        },

        // EDIT DEPARTMENT
        editUserSuccess(state, action) {
            state.users = action.payload.users;
        },

        // DELETE DEPARTMENT
        deleteUserSuccess(state, action) {
            state.users = action.payload.users;
        },

        // DELETE DEPARTMENTS
        deleteUsersSuccess(state, action) {
            state.users = action.payload.users;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getUsersList() {
    return async () => {
        try {
            const response = await axios.get('/api/user/list');
            dispatch(slice.actions.getUsersListSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addUser(user, users) {
    return async () => {
        try {
            const response = await axios.post('/api/user/add-user', { user, users });
            dispatch(slice.actions.addUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function editUser(user, users) {
    return async () => {
        try {
            const response = await axios.post('/api/user/edit-user', { user, users });
            dispatch(slice.actions.editUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteUser(userId, users) {
    return async () => {
        try {
            const response = await axios.post('/api/user/delete-user', { users, userId });
            dispatch(slice.actions.deleteUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function deleteUsers(userIds, users) {
    return async () => {
        try {
            const response = await axios.post('/api/user/delete-users', { users, userIds });
            dispatch(slice.actions.deleteUsersSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
