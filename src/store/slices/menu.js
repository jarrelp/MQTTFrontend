import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    selectedItem: [], // isOpen
    drawerOpen: false // opened
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.selectedItem = action.payload;
        },

        openDrawer(state, action) {
            state.drawerOpen = action.payload;
        }
    }
});

export default menu.reducer;

export const { activeItem, openDrawer } = menu.actions;

// // action - state management
// import * as actionTypes from './actions';

// export const initialState = {
//     isOpen: [], // for active default menu
//     opened: true
// };

// // ==============================|| menu REDUCER ||============================== //

// const menuReducer = (state = initialState, action) => {
//     let id;
//     switch (action.type) {
//         case actionTypes.MENU_OPEN:
//             id = action.id;
//             return {
//                 ...state,
//                 isOpen: [id]
//             };
//         case actionTypes.SET_MENU:
//             return {
//                 ...state,
//                 opened: action.opened
//             };
//         default:
//             return state;
//     }
// };

// export default menuReducer;
