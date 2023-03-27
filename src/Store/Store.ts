import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../Slice/apiSlice';
import cardSlice from '../Slice/cardSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		editCard: cardSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
