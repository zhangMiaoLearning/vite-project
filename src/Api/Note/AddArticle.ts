import { request } from '../../Utils/Axios/Axios';

export const AddArticle = (values: {
	title: string;
	content: HTMLInputElement;
}) => {
	request
		.post('/article', {
			title: values.title,
			content: values.content,
		})
		.then((res) => {
			console.log(res.data);
		});
};
