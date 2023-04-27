import { request } from '../utils/Axios/Axios';

export function RegisterApi(values: { userName: string; password: string }) {
	return request
		.post('/users', {
			username: values.userName,
			pwd: values.password,
		})
		.then((res) => res.data);
}
