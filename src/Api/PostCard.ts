import { request } from '../Utils/Axios/Axios';

export function PostCard(
	values: {
		title: string;
		description: string;
		rate: number;
	},
	updateAt: typeof Date.prototype
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
