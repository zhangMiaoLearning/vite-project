import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardListModel {
	id: string;
	title: string;
	rate: number;
	description: string;
	updateAt: string | null;
}
interface CardListState {
	cardList: CardListModel[];
}
const initialState: CardListState = {
	cardList: [
		{
			id: '1',
			title: '1',
			rate: 1,
			description: '1',
			updateAt: '2023-03-19 17:20:18',
		},
	],
};
const CardReducer = createSlice({
	name: 'cardList',
	initialState,
	reducers: {
		addCard(state, action: PayloadAction<CardListModel>) {
			state.cardList.push(action.payload);
		},
	},
});

export const { addCard } = CardReducer.actions;
export default CardReducer.reducer;
