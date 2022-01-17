import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getThisYearBankListApi, deleteBankEntryApi } from '../api/bankApi';

export const getThisYearBankList = createAsyncThunk("bank/getThisYearList", async ({ token, currentPage }) => {
    const response = await getThisYearBankListApi({ token, currentPage });
    return response;
});

export const deleteBankEntry = createAsyncThunk("bank/deleteEntry", async ({ token, bankId }) => {
    const response = await deleteBankEntryApi({ token, bankId });
    return response;
});
 
export const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        status: null,
        error: null,
        deleteStatus: null,
        deleteError: null,
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
            if (payload.result === "success") {
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
            } else {
                state.status = "error";
                state.error = payload.result;
            }
        },
        [deleteBankEntry.fulfilled]: (state, { payload }) => {
            if (payload.result === "bank_delete_success") {
                state.deleteStatus = "success";
            } else {
                state.deleteStatus = "error";
                state.deleteError = payload.result;
            }
        }
    }

});

export const { clearBankList } = bankSlice.actions;
export default bankSlice.reducer;