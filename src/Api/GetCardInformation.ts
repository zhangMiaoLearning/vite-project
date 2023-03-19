import { request } from '../Utils/Axios/Axios';

export function GetCardInformation() {
	return request
		.get('/card', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data);
}
