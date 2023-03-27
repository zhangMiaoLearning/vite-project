import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
	name: 'editCard',
	initialState: {
		isEdit: false,
		editId: '',
		isDeleteModalOpen: false,
		deleteId: '',
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
		setDeleteId: (state, action) => {
			state.deleteId = action.payload;
		},
	},
});
export const { setIsEdit, setEditId, setIsDeleteModalOpen, setDeleteId } =
	cardSlice.actions;
export default cardSlice;
