import { request } from '../../Utils/Axios/Axios';

export function UpdateCardInformation(
	id: string,
	values: { title: string; description: string; rate: number },
	updateAt: null | string,
	userName: null | string
) {
	return request
		.put('/card' + `/${id}`, {
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
