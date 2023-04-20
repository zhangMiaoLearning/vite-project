import { request } from '../../Utils/Axios/Axios';

export const GetArticles = (page: number) => {
	return request.get(`/article?_page=${page}`).then((res) => res.data);
};
