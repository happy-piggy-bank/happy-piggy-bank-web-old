import { createSlice } from '@reduxjs/toolkit';

export const memberSlice = createSlice({
    name: 'member',
    initialState: {
        value: {}
    },
    reducers: {
        getMemberInfo: (state, action) => {
            Object.assign(state.value, action.payload);
        },
        clearMemberInfo: (state) => {
            state.value = {};
        }
    }
});

export const { getMemberInfo, clearMemberInfo } = memberSlice.actions;
export default memberSlice.reducer;