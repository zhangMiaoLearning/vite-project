import { createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { Card } from './cardApiSlice';

export const CardReducerName = 'card';

interface CardState {
	creatingCard?: Card;
	updatingCard?: Card;
	deleting: {
		id: string;
	};
	cardList: Card[];
	query: {
		keyword: string | undefined;
	};
	editing: {
		id: string;
	};
	isDeleteModalOpen: boolean;
}
interface CardReducer extends SliceCaseReducers<CardState> {
	initCardList: CaseReducer<CardState, PayloadAction<Card[]>>;
	updateQuery: CaseReducer<CardState, PayloadAction<string>>;
	confirmCreat: CaseReducer<CardState, PayloadAction<Card>>;
	activeUpdate: CaseReducer<CardState, PayloadAction<string>>;
	confirmUpdate: CaseReducer<CardState, PayloadAction<Card>>;
	activeDelete: CaseReducer<
		CardState,
		PayloadAction<{ id: string; isDeleteModalOpen: boolean }>
	>;
	confirmDelete: CaseReducer<CardState, PayloadAction<string>>;
}

const cardSlice = createSlice<CardState, CardReducer, typeof CardReducerName>({
	name: CardReducerName,
	initialState: {
		cardList: [],
		query: {
			keyword: undefined,
		},
		editing: {
			id: '',
		},
		deleting: {
			id: '',
		},
		isDeleteModalOpen: false,
	},
	reducers: {
		initCardList: (state, action) => {
			state.cardList = Array.isArray(action.payload) ? action.payload : [];
		},
		updateQuery: (state, action) => {
			state.query.keyword = action.payload || '';
		},
		confirmCreat: (state, action) => {
			state.cardList = [...state.cardList, action.payload];
		},
		activeUpdate: (state, action) => {
			state.editing.id = action.payload;
		},
		confirmUpdate: (state, action) => {
			console.log('update');
			state.cardList.map((card) => {
				return card.id === action.payload.id ? action.payload : card;
			});
		},
		confirmDelete: (state, action) => {
			state.cardList = state.cardList.filter(
				(card) => card.id !== action.payload
			);
		},
		activeDelete: (state, action) => {
			state.isDeleteModalOpen = action.payload.isDeleteModalOpen;
			state.deleting.id = action.payload.id;
		},
	},
});
export const {
	initCardList,
	updateQuery,
	confirmUpdate,
	activeUpdate,
	confirmCreat,
	confirmDelete,
	activeDelete,
} = cardSlice.actions;
export default cardSlice;
