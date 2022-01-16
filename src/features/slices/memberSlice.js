import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLoginApi } from "../api/userApi";

export const userLogin = createAsyncThunk("members/userLogin", async ({ userEmail, userPw }) => {
    const response = await userLoginApi({ userEmail, userPw });
    return response;
});

export const memberSlice = createSlice({
    name: 'member',
    initialState: {
        status: null,
        error: null,
        data: {}
    },
    reducers: {
        clearMemberInfo: (state) => {
            state.data = {};
        }
    },
    extraReducers: {
        [userLogin.fulfilled]: (state, { payload }) => {
            state.status = "success";
            Object.assign(state.data, {
                userNum: payload.data.userNum,
                userEmail: payload.data.userEmail,
                userName: payload.data.userName
            });
            localStorage.setItem('authToken', payload.data.token);
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.status = "error";
            state.error = payload.result;
        }
    }
});

export const { clearMemberInfo } = memberSlice.actions;
export default memberSlice.reducer;