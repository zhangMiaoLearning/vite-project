import { request } from '../../utils/Axios/Axios';

export const GetArticles = () => {
	return request.get(`/article`).then((res) => res.data);
};
