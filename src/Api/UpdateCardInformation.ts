import { request } from '../Utils/Axios/Axios';

export function UpdateCardInformation(
	id: string,
	values: { title: string; description: string; rate: number },
	updateAt: null | string
) {
	return request
		.put('/card' + `/${id}`, {
			title: values.title,
			description: values.description,
			rate: values.rate,
			updateAt: updateAt,
		})
		.then((res) => {
			console.log(res.data);
		});
}
