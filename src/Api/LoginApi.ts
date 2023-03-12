import { request } from '../Utils/Axios/Axios';

export function LoginApi(values: { username: string; password: string }) {
	return request
		.get('/users' + `?username=${values.username}&pwd=${values.password}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data);
}
