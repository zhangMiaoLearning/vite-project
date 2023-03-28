import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		selectKey: '1',
	},
	reducers: {
		setSelectKey: (state, action) => {
			state.selectKey = action.payload;
		},
	},
});
export const { setSelectKey } = homeSlice.actions;
export default homeSlice;
