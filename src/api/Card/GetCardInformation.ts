import { request } from '../../utils/Axios/Axios';

export function GetCardInformation() {
	return request
		.get('/card?_sort=updateAt&_order=desc', {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data);
}
