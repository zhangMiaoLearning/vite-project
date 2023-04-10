import { useNavigate } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector } from '../../Store/Store';
import { ValidUsername } from '../../Api/ValidUsername';
import { RegisterApi } from '../../Api/RegisterApi';
import { message, Modal } from 'antd';
import {
	confirmPassword,
	savePassWord,
	saveUserName,
} from '../../Slice/homeSlice';
import { NamePath } from 'antd/es/form/interface';
import { StoreValue } from 'rc-field-form/lib/interface';

export const useRegister = () => {
	const navigate = useNavigate();
	const dispatch = useStoreDispatch();
	const username = useStoreSelector(
		(state) => state.home.userInformation.username
	);
	const password = useStoreSelector(
		(state) => state.home.userInformation.password
	);
	const confirmed = useStoreSelector((state) => state.home.confirmPassword);

	async function onFinish(values: { userName: string; password: string }) {
		const valid = await ValidUsername(values.userName).then();
		if (valid) {
			message.error('用户名已存在');
			return;
		} else {
			const result = await RegisterApi(values).then();
			if (result) {
				navigate('/home');
				sessionStorage.setItem('userName', values.userName);
			}
		}
	}
	function onFinishFailed() {
		Modal.error({
			title: '提示',
			content: '请正确填写注册信息',
		});
	}

	const onInputUsername = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(saveUserName(e.currentTarget.value));
	};

	const onInputPassword = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(savePassWord(e.currentTarget.value));
	};
	const onSaveConfirmed = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(confirmPassword(e.currentTarget.value));
	};

	function verifyPassword(getFieldValue: (name: NamePath) => StoreValue) {
		return {
			validator(_: object, value: string) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject(new Error('两次密码不一致，请重新输入'));
			},
		};
	}

	return {
		dispatch,
		username,
		password,
		confirmed,
		onFinish,
		onFinishFailed,
		onInputUsername,
		onInputPassword,
		onSaveConfirmed,
		verifyPassword,
	};
};
