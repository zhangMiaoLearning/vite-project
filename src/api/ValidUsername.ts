import { request } from '../utils/Axios/Axios';

export function ValidUsername(username: string) {
	return request
		.get('/users' + `?username=${username}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data[0]);
}
