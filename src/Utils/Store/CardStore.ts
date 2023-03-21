import { configureStore } from '@reduxjs/toolkit';
import CardReducer from '../Reducer/CardReducer';

export const cardStore = configureStore({
	reducer: {
		cardList: CardReducer,
	},
});
export type RootState = ReturnType<typeof cardStore.getState>;
