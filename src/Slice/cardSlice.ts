import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
	name: 'editCard',
	initialState: {
		isEdit: false,
		editId: '',
		isDeleteModalOpen: false,
		deleteId: '',
		searchValue: '',
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
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
	},
});
export const {
	setIsEdit,
	setEditId,
	setIsDeleteModalOpen,
	setDeleteId,
	setSearchValue,
} = cardSlice.actions;
export default cardSlice;
