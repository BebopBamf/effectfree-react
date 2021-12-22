import { configureStore } from '@reduxjs/toolkit';

import authorsReducer from './data/authorSlice';

const store = configureStore({
  reducer: {
    authors: authorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
