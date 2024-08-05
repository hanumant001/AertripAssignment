import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './features/flightSlice';

export const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});
