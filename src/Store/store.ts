// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../API/AuthAPI/authApi'; // Adjust the path based on your project structure

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
