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
		const mockActiveUpdate = cardSlice.reducer(
			initialCardState,
			activeUpdate('1')
		);
		expect(mockActiveUpdate.editing.id).toEqual('1');
	});
	it('should confirmUpdate', function () {
		const mockConfirmUpdate = cardSlice.reducer(
			initialCardState,
			confirmUpdate({
				id: '1',
				title: '2',
				description: '2',
				rate: 2,
				updateAt: '2',
				userName: '2',
			})
		);
		expect(mockConfirmUpdate.cardList).toStrictEqual([
			{
				id: '1',
				title: '2',
				description: '2',
				rate: 2,
				updateAt: '2',
				userName: '2',
			},
		]);
	});

	it('should handle confirmUpdate', () => {
		const initialState = {
			...initialCardState,
			cardList: [
				{
					id: '1',
					title: 'card 1',
					description: '',
					rate: 3,
					updateAt: '',
					userName: null,
				},
				{
					id: '2',
					title: 'card 2',
					description: '',
					rate: 4,
					updateAt: '',
					userName: null,
				},
			],
		};
		const updatedCard = {
			id: '1',
			title: 'card 1 updated',
			description: '',
			rate: 3,
			updateAt: '',
			userName: null,
		};
		const action = confirmUpdate(updatedCard);
		const newState = cardSlice.reducer(initialState, action);
		expect(newState.cardList).toContainEqual(updatedCard);
	});

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
