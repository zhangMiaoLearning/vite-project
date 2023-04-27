import { useNavigate } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector } from '../../../store/Store';
import { useLoginQuery } from '../../../slice/loginApiSlice';
import { saveUserInformation } from '../../../slice/homeSlice';
import { Modal } from 'antd';

export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useStoreDispatch();
	const userInformation = useStoreSelector(
		(state) => state.home.userInformation
	);
	const { data: user } = useLoginQuery(userInformation);

	async function onFinish(values: { username: string; password: string }) {
		dispatch(saveUserInformation(values));
		if (user) {
			navigate('/home');
			sessionStorage.setItem('userName', values.username);
		}
	}

	function onFinishFailed() {
		Modal.error({
			title: '提示',
			content: '请正确填写登录信息',
		});
	}

	return { onFinish, onFinishFailed };
};
