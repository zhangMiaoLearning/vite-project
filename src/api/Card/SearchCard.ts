import { request } from '../../utils/Axios/Axios';

export function SearchCard(value: string) {
	return request
		.get(`/card?title_like=${value}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res.data);
}
