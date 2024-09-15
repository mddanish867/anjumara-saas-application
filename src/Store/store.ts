import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../API/AuthAPI/authApi';
import { sqlResponseApi } from '../API/ResponseAPI/sqlResponseApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [sqlResponseApi.reducerPath]: sqlResponseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(sqlResponseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
