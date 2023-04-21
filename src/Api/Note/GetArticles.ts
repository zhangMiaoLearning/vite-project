import { request } from '../../Utils/Axios/Axios';

export const GetArticles = () => {
	return request.get(`/article`).then((res) => res.data);
};
