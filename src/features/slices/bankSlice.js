import { createSlice } from '@reduxjs/toolkit';

export const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        value: []
    },
    reducers: {
        addBankRecordsInBulk: (state, action) => {
            state.value = state.value.concat(action.payload);
        },
        addBankRecord: (state, action) => {
            state.value.push(action.payload);
        },
        deleteBankRecord: (state, action) => {
            state.value = state.value.filter(entry => entry.id !== action.payload.id);
        }
    }
});

export const { addBankRecordsInBulk, addBankRecord, deleteBankRecord } = bankSlice.actions;
export default bankSlice.reducer;