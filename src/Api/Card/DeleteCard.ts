import { request } from '../../Utils/Axios/Axios';

export function DeleteCard(id: string) {
	return request.delete('/card' + `/${id}`).then((res) => {
		console.log(res.data);
	});
}
