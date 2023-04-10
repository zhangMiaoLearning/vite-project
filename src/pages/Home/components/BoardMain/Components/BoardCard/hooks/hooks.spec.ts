import { renderHook } from '@testing-library/react-hooks';
import { StoreWrapper } from '../../../../../../../Utils/wrapperTest';
import { act } from '@testing-library/react-hooks/native';
import { useCardAction } from './hooks';

describe('useCardAction hooks test', function () {
	const mockBoardCardProps = {
		id: '1',
		title: '1',
		description: '1',
		rate: 1,
		updateAt: '2023-03-23 21:30:14',
		userName: 'username',
	};
	beforeEach(() => {
		window.sessionStorage.setItem('userName', 'username');
	});
	afterEach(() => {
		window.sessionStorage.clear();
	});
	it('should active delete modal when onOpenDeleteModal', function () {
		const { result } = renderHook(() => useCardAction(mockBoardCardProps), {
			wrapper: StoreWrapper,
		});
		act(() => {
			result.current.onOpenDeleteModal(true);
		});
		expect(result.current.isDeleteModalOpen).toEqual(true);
		expect(result.current.deleteId).toEqual('1');
	});

	it('should close delete modal when handleDelete', function () {
		const { result } = renderHook(() => useCardAction(mockBoardCardProps), {
			wrapper: StoreWrapper,
		});
		act(() => {
			result.current.onOpenDeleteModal(true);
			result.current.handleDelete();
		});
		expect(result.current.isDeleteModalOpen).toEqual(false);
	});

	it('should onOpenEdit', function () {
		const { result } = renderHook(() => useCardAction(mockBoardCardProps), {
			wrapper: StoreWrapper,
		});
		act(() => {
			result.current.onOpenEdit();
		});
		expect(result.current.isEdit).toEqual(true);
		expect(result.current.editId).toEqual('1');
	});

	it('should onCloseEdit', function () {
		const { result } = renderHook(() => useCardAction(mockBoardCardProps), {
			wrapper: StoreWrapper,
		});
		act(() => {
			result.current.onCloseEdit();
		});
		expect(result.current.isEdit).toEqual(false);
		expect(result.current.editId).toEqual('');
	});

	it('should return true', function () {
		const { result } = renderHook(() => useCardAction(mockBoardCardProps), {
			wrapper: StoreWrapper,
		});
		expect(result.current.isUser).toEqual(true);
	});
});
