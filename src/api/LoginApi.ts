import { request } from '../utils/Axios/Axios';
import { message } from 'antd';

export function LoginApi(values: { username: string; password: string }) {
	return request
		.get('/users' + `?username=${values.username}&pwd=${values.password}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data[0])
		.catch(() => {
			message.error('用户名或密码错误');
		});
}
