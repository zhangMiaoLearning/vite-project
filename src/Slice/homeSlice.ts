import {
	CaseReducer,
	createSlice,
	PayloadAction,
	SliceCaseReducers,
} from '@reduxjs/toolkit';

export const HomeReducerName = 'home';

interface HomeState {
	menuOption: string;
	userInformation: {
		username: string;
		password: string;
	};
	currentPath: string;
}

interface HomeReducer extends SliceCaseReducers<HomeState> {
	confirmMenuOption: CaseReducer<HomeState, PayloadAction<string>>;
	saveUserInformation: CaseReducer<
		HomeState,
		PayloadAction<{ username: string; password: string }>
	>;
	saveCurrentPath: CaseReducer<HomeState, PayloadAction<string>>;
}

const homeSlice = createSlice<HomeState, HomeReducer, typeof HomeReducerName>({
	name: HomeReducerName,
	initialState: {
		menuOption: '1',
		userInformation: {
			username: '',
			password: '',
		},
		currentPath: '/',
	},
	reducers: {
		confirmMenuOption: (state, action) => {
			state.menuOption = action.payload;
		},
		saveUserInformation: (state, action) => {
			state.userInformation = action.payload;
		},
		saveCurrentPath: (state, action) => {
			state.currentPath = action.payload;
		},
	},
});
export const { confirmMenuOption, saveUserInformation, saveCurrentPath } =
	homeSlice.actions;
export default homeSlice;
