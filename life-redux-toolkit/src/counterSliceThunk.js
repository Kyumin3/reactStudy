import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

const asyncUpFetch = createAsyncThunk(
    'counterSlice/asyncUpFetch',
    async () => {
        const resp = await fetch('https://api.counterapi.dev/v1/testLkm/test/up')
        const data = await resp.json();
        return data;
    }
);

const counterSliceThunk = createSlice({
    name: 'counterSlice',
    initialState: {
        value: 0,
        status: 'Welcome',
        visitCount: ''
    },
    reducers: {
        up:(state, action) => {
            console.log("upAction:::", action.payload);
            state.value = state.value + action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncUpFetch.pending, (state, action) => {
            state.status = 'Loading'
        })
        builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
            console.log("payload:::",action.payload);
            state.status = 'complete';
            state.visitCount = action.payload.count;
        })
        builder.addCase(asyncUpFetch.rejected, (state, action) => {
            state.status = 'fail';
        })
    }
})

export default counterSliceThunk;
export const {up, set} = counterSliceThunk.actions;
export {asyncUpFetch};