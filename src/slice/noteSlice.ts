import {
	CaseReducer,
	createSlice,
	PayloadAction,
	SliceCaseReducers,
} from '@reduxjs/toolkit';

export const NoteReducerName = 'note';
export interface Note {
	id: string;
	title: string;
	description: string;
	content: any;
	updateAt: string | null;
	userName: string | null;
}

interface NoteState {
	// noteList: ;
	noteList: Note[];
	creatingNote: {
		note: Note;
		isCreatModelOpen: boolean;
	};
	updatingNote: Note;
	deleting: {
		id: string;
		isDeleteModalOpen: boolean;
	};
	query: {
		keyword: string | undefined;
	};
	editing: {
		id: string;
	};
}
interface NoteReducer extends SliceCaseReducers<NoteState> {
	initNodeList: CaseReducer<NoteState, PayloadAction<Note[]>>;
	confirmCreat: CaseReducer<NoteState, PayloadAction<Note>>;
}
const noteSlice = createSlice<NoteState, NoteReducer, typeof NoteReducerName>({
	name: NoteReducerName,
	initialState: {
		noteList: [],
		creatingNote: {
			note: {
				id: '',
				title: '',
				description: '',
				content: '',
				updateAt: '',
				userName: '',
			},
			isCreatModelOpen: false,
		},
		updatingNote: {} as Note,
		deleting: {
			id: '',
			isDeleteModalOpen: false,
		},
		query: {
			keyword: undefined,
		},
		editing: {
			id: '',
		},
	},
	reducers: {
		initNodeList: (state, action) => {
			state.noteList = Array.isArray(action.payload) ? action.payload : [];
		},
		confirmCreat: (state, action) => {
			state.noteList = [...state.noteList, action.payload];
		},
	},
});
export const { initNodeList, confirmCreat } = noteSlice.actions;

export default noteSlice;
