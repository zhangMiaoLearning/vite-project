import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		selectKey: '1',
		currentPath: '/',
	},
	reducers: {
		setSelectKey: (state, action) => {
			state.selectKey = action.payload;
		},
		setCurrentPath: (state, action) => {
			state.currentPath = action.payload;
		},
	},
});
export const { setSelectKey, setCurrentPath } = homeSlice.actions;
export default homeSlice;
