import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getThisYearBankListApi } from '../api/bankApi';

export const getThisYearBankList = createAsyncThunk("bank/getThisYearList", async ({ token, currentPage }) => {
    const response = await getThisYearBankListApi({ token, currentPage });
    return response;
})
 
export const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        status: null,
        error: null,
        statistics: {},
        data: [],
        isListEnd: false
    },
    reducers: {
        clearBankList: (state) => {
            state.data = [];
        }
    },
    extraReducers: {
        [getThisYearBankList.pending]: (state) => {
            state.status = "loading"
        },
        [getThisYearBankList.fulfilled]: (state, { payload }) => {
            state.status = "success";
            Object.assign(state.statistics, {
                totalCount: payload.data.totalCount,
                totalAmount: payload.data.totalAmount
            });
            if (payload.data.bankList) {
                payload.data.bankList.map((element) => state.data.push(element));
            } else {
                state.isListEnd = true;
            }
        },
        [getThisYearBankList.rejected]: (state, { payload }) => {
            state.status = "error";
            state.error = payload.result;
        }
    }

});

export const { clearBankList } = bankSlice.actions;
export default bankSlice.reducer;