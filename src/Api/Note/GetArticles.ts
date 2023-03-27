import { request } from '../../Utils/Axios/Axios';

export const GetArticles = (page: number, limit: number) => {
	return request
		.get(`/article?_page=${page}&_limit=${limit}`)
		.then((res) => res.data);
};
