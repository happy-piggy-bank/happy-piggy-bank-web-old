import { configureStore } from '@reduxjs/toolkit'
import memberReducer from './memberSlice';
import bankReducer from './bankSlice';

export default configureStore({
  reducer: {
    member: memberReducer,
    bank: bankReducer
  },
});