import { renderHook, act } from '@testing-library/react-hooks';
import { useCardList } from './hooks';
import { useStoreDispatch, useStoreSelector } from '../../../../../Store/Store';
import { updateQuery } from '../../../../../Slice/cardSlice';

jest.mock('../../../../../Slice/cardApiSlice', () => ({
	useSearchCardQuery: jest.fn(),
}));

jest.mock('../../../../../Store/Store', () => ({
	useStoreDispatch: jest.fn(),
	useStoreSelector: jest.fn(),
}));

describe('useCardList', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should return list and onQuery function', () => {
		const dispatchMock = jest.fn();
		const selectorMock = jest.fn(() => ({
			card: {
				query: {
					keyword: 'test',
				},
				cardList: [
					{ id: 1, updateAt: new Date(2023, 3, 1) },
					{ id: 2, updateAt: new Date(2023, 3, 2) },
				],
			},
		}));
		(useStoreDispatch as jest.Mock).mockReturnValue(dispatchMock);
		(useStoreSelector as jest.Mock).mockImplementation(selectorMock);
		const { result } = renderHook(() => useCardList());

		expect(result.current.list).toEqual([
			{ id: 2, updateAt: new Date(2023, 3, 2) },
			{ id: 1, updateAt: new Date(2023, 3, 1) },
		]);
		expect(typeof result.current.onQuery).toBe('function');
	});

	it('should update query on onQuery function call', () => {
		const dispatchMock = jest.fn();
		const selectorMock = jest.fn(() => ({
			card: {
				query: {
					keyword: 'test',
				},
				cardList: [
					{ id: 1, updateAt: new Date(2023, 3, 1) },
					{ id: 2, updateAt: new Date(2023, 3, 2) },
				],
			},
		}));
		(useStoreDispatch as jest.Mock).mockReturnValue(dispatchMock);
		(useStoreSelector as jest.Mock).mockImplementation(selectorMock);
		const { result } = renderHook(() => useCardList());

		act(() => {
			result.current.onQuery('new query');
		});

		expect(dispatchMock).toHaveBeenCalledWith(updateQuery('new query'));
	});
});
