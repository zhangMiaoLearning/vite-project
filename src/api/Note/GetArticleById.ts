import { request } from '../../utils/Axios/Axios';

export const GetArticleById = (id: string) => {
	return request.get(`/article?id=${id}`).then((res) => res.data);
};
