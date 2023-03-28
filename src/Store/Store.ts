import { configureStore } from '@reduxjs/toolkit';
import { cardApiSlice } from '../Slice/cardApiSlice';
import cardSlice from '../Slice/cardSlice';
import homeSlice from '../Slice/homeSlice';

export const store = configureStore({
	reducer: {
		[cardApiSlice.reducerPath]: cardApiSlice.reducer,
		editCard: cardSlice.reducer,
		home: homeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cardApiSlice.middleware),
	devTools: true,
});
