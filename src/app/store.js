import { configureStore } from '@reduxjs/toolkit';
import drumerReducer from '../features/drum/drumSlice';
export const store = configureStore({
  reducer: {
    drum: drumerReducer,
  },
});
