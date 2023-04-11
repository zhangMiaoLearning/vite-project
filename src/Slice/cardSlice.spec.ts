import cardSlice, {
	activeDelete,
	activeUpdate,
	CardState,
	confirmCreat,
	confirmDelete,
	confirmUpdate,
	initCardList,
	updateQuery,
} from './cardSlice';
describe('cardSlice test', function () {
	const initialCardState: CardState = {
		cardList: [
			{
				id: '1',
				title: '1',
				description: '1',
				rate: 1,
				updateAt: '1',
				userName: '1',
			},
		],
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
	};
	it('should initCardList', function () {
		const mockList = cardSlice.reducer(
			initialCardState,
			initCardList([
				{
					id: '1',
					title: '1',
					description: '1',
					rate: 1,
					updateAt: '1',
					userName: '1',
				},
				{
					id: '2',
					title: '2',
					description: '2',
					rate: 2,
					updateAt: '2',
					userName: '2',
				},
			])
		);
		expect(mockList.cardList.length).toEqual(2);
	});
	it('should updateQuery', function () {
		const mockUpdateQuery = cardSlice.reducer(
			initialCardState,
			updateQuery('test')
		);
		expect(mockUpdateQuery.query.keyword).toEqual('test');
	});
	it('should confirmCreat', function () {
		const mockConfirmCreat = cardSlice.reducer(
			initialCardState,
			confirmCreat({
				id: '2',
				title: '2',
				description: '2',
				rate: 2,
				updateAt: '2',
				userName: '2',
			})
		);
		expect(mockConfirmCreat.cardList.length).toEqual(2);
	});
	it('should activeUpdate', function () {
		const mockConfirmUpdate = cardSlice.reducer(
			initialCardState,
			activeUpdate('1')
		);
		expect(mockConfirmUpdate.editing.id).toEqual('1');
	});
	// it('should confirmUpdate', function () {
	// 	const mockConfirmUpdate = cardSlice.reducer(
	// 		initialCardState,
	// 		confirmUpdate({
	// 			id: '1',
	// 			title: '2',
	// 			description: '2',
	// 			rate: 2,
	// 			updateAt: '2',
	// 			userName: '2',
	// 		})
	// 	);
	// 	expect(mockConfirmUpdate.cardList).toBe([
	// 		{
	// 			id: '1',
	// 			title: '2',
	// 			description: '2',
	// 			rate: 2,
	// 			updateAt: '2',
	// 			userName: '2',
	// 		},
	// 	]);
	// });
	it('should confirmDelete', function () {
		const mockConfirmDelete = cardSlice.reducer(
			initialCardState,
			confirmDelete('1')
		);
		expect(mockConfirmDelete.cardList).toEqual([]);
	});
	it('should activeDelete', function () {
		const mockActiveDelete = cardSlice.reducer(
			initialCardState,
			activeDelete({
				isDeleteModalOpen: true,
				id: '1',
			})
		);
		expect(mockActiveDelete.deleting.id).toEqual('1');
		expect(mockActiveDelete.isDeleteModalOpen).toEqual(true);
	});
});
