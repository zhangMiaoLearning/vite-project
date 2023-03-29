import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		selectKey: '1',
		currentPath: '/',
		userInformation: {
			username: '',
			password: '',
		},
	},
	reducers: {
		setSelectKey: (state, action) => {
			state.selectKey = action.payload;
		},
		setCurrentPath: (state, action) => {
			state.currentPath = action.payload;
		},
		setUserInformation: (state, action) => {
			state.userInformation = action.payload;
		},
	},
});
export const { setSelectKey, setCurrentPath, setUserInformation } =
	homeSlice.actions;
export default homeSlice;
