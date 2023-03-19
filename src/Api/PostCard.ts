import { request } from '../Utils/Axios/Axios';

export function PostCard(
	values: { title: string; description: string; rate: number },
	updateAt: null | string
) {
	return request
		.post('/card', {
			title: values.title,
			description: values.description,
			rate: values.rate,
			updateAt: updateAt,
		})
		.then((res) => {
			console.log(res.data);
		});
}
