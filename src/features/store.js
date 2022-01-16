import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './slices/bankSlice';

export default configureStore({
  reducer: {
    bank: bankReducer
  },
});