import { configureStore } from '@reduxjs/toolkit'
import memberReducer from './slices/memberSlice';
import bankReducer from './slices/bankSlice';

export default configureStore({
  reducer: {
    member: memberReducer,
    bank: bankReducer
  },
});