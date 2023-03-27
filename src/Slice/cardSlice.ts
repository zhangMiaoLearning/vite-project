import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
	name: 'editCard',
	initialState: {
		isEdit: false,
		editId: '',
		isDeleteModalOpen: false,
	},
	reducers: {
		setIsEdit: (state, action) => {
			state.isEdit = action.payload;
		},
		setEditId: (state, action) => {
			state.editId = action.payload;
		},
		setIsDeleteModalOpen: (state, action) => {
			state.isDeleteModalOpen = action.payload;
		},
	},
});
export const { setIsEdit, setEditId, setIsDeleteModalOpen } = cardSlice.actions;
export default cardSlice;
