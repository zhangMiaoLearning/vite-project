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
	confirmPassword: string;
}

interface HomeReducer extends SliceCaseReducers<HomeState> {
	confirmMenuOption: CaseReducer<HomeState, PayloadAction<string>>;
	saveUserInformation: CaseReducer<
		HomeState,
		PayloadAction<{ username: string; password: string }>
	>;
	saveCurrentPath: CaseReducer<HomeState, PayloadAction<string>>;
	saveUserName: CaseReducer<HomeState, PayloadAction<string>>;
	savePassWord: CaseReducer<HomeState, PayloadAction<string>>;
	confirmPassword: CaseReducer<HomeState, PayloadAction<string>>;
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
		confirmPassword: '',
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
		saveUserName: (state, action) => {
			state.userInformation.username = action.payload;
		},
		savePassWord: (state, action) => {
			state.userInformation.password = action.payload;
		},
		confirmPassword: (state, action) => {
			state.confirmPassword = action.payload;
		},
	},
});
export const {
	confirmMenuOption,
	saveUserInformation,
	saveCurrentPath,
	saveUserName,
	savePassWord,
	confirmPassword,
} = homeSlice.actions;
export default homeSlice;
