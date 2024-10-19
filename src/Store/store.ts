import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../API/AuthAPI/authApi';
import { sqlResponseApi } from '../API/ResponseAPI/sqlResponseApi';
import { webResponseApi } from '../API/ResponseAPI/webResponseAPI';
import { templateApi } from '@/API/Templates/templateApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [templateApi.reducerPath]: templateApi.reducer,
    [sqlResponseApi.reducerPath]: sqlResponseApi.reducer,
    [webResponseApi.reducerPath]: webResponseApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(templateApi.middleware).concat(sqlResponseApi.middleware).concat(webResponseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
