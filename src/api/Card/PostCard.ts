import { request } from '../../utils/Axios/Axios';

export function PostCard(
	values: { title: string; description: string; rate: number },
	updateAt: null | string,
	userName: string | null
) {
	return request
		.post('/card', {
			title: values.title,
			description: values.description,
			rate: values.rate,
			updateAt: updateAt,
			userName: userName,
		})
		.then((res) => {
			console.log(res.data);
		});
}
