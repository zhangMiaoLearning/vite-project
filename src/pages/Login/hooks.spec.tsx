import { renderHook, act } from '@testing-library/react-hooks';
import { useNavigate } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector } from '../../Store/Store';
import { useLoginQuery } from '../../Slice/loginApiSlice';
import { saveUserInformation } from '../../Slice/homeSlice';
import { useLogin } from './hooks';
import { Modal } from 'antd';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

jest.mock('../../Store/Store', () => ({
	useStoreDispatch: jest.fn(),
	useStoreSelector: jest.fn(),
}));

jest.mock('../../Slice/loginApiSlice', () => ({
	useLoginQuery: jest.fn(),
}));

jest.mock('../../Slice/homeSlice', () => ({
	saveUserInformation: jest.fn(),
}));

jest.mock('antd', () => ({
	Modal: {
		error: jest.fn(),
	},
}));

describe('useLogin', () => {
	let navigate: jest.Mock;
	let dispatch: jest.Mock;
	let userInformation: {
		username: string;
		password: string;
	};
	let onFinish: jest.Mock;
	let onFinishFailed: jest.Mock;
	let data: {
		username: string;
		password: string;
	};

	beforeEach(() => {
		navigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(navigate);

		dispatch = jest.fn();
		(useStoreDispatch as jest.Mock).mockReturnValue(dispatch);

		userInformation = {
			username: 'testuser',
			password: 'testpassword',
		};
		(useStoreSelector as jest.Mock).mockReturnValue(userInformation);

		onFinish = jest.fn();
		onFinishFailed = jest.fn();

		data = {
			username: 'testuser',
			password: 'testpassword',
		};
		(useLoginQuery as jest.Mock).mockReturnValue({ data });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should navigate to home if user is logged in', async () => {
		const { result } = renderHook(() => useLogin());
		const sessionStorageMock = {
			setItem: jest.fn(),
		};
		Object.defineProperty(window, 'sessionStorage', {
			value: sessionStorageMock,
		});

		await act(async () => {
			await result.current.onFinish(userInformation);
		});

		expect(dispatch).toHaveBeenCalledWith(saveUserInformation(userInformation));
		expect(navigate).toHaveBeenCalledWith('/home');
		expect(sessionStorage.setItem).toHaveBeenCalledWith(
			'userName',
			userInformation.username
		);
	});

	it('should show error modal if user is not logged in', async () => {
		(useLoginQuery as jest.Mock).mockReturnValue({ data: null });

		const { result } = renderHook(() => useLogin());
		await act(async () => {
			await result.current.onFinishFailed();
		});

		expect(Modal.error).toHaveBeenCalledWith({
			title: '提示',
			content: '请正确填写登录信息',
		});
	});
});
