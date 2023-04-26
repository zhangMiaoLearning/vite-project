import { configureStore } from '@reduxjs/toolkit';
import { cardApiSlice } from '../Slice/cardApiSlice';
import cardSlice, { CardReducerName } from '../Slice/cardSlice';
import homeSlice, { HomeReducerName } from '../Slice/homeSlice';
import { loginApiSlice } from '../Slice/loginApiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import NoteSlice, { NoteReducerName } from '../Slice/noteSlice';

export const store = configureStore({
	reducer: {
		[cardApiSlice.reducerPath]: cardApiSlice.reducer,
		[loginApiSlice.reducerPath]: loginApiSlice.reducer,
		[CardReducerName]: cardSlice.reducer,
		[HomeReducerName]: homeSlice.reducer,
		[NoteReducerName]: NoteSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			cardApiSlice.middleware,
			loginApiSlice.middleware
		),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
