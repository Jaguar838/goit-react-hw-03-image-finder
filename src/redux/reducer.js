import { createReducer } from '@reduxjs/toolkit';
import { getIMGrequest, getIMGsuccess, getIMGerror } from './action';
const initialState = [];
const actions = {
    [getIMGrequest]: (state, action) => {
        return initialState;
    },
    [getIMGsuccess]: (state, action) => {
        return [...state, ...action.payload];
    },
    [getIMGerror]: () => {},
};
export const gallery = createReducer(initialState, actions);
