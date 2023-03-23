import { request } from '../../Utils/Axios/Axios';
import { message } from 'antd';

export const AddArticle = (
	values: {
		title: string;
		content: HTMLInputElement;
	},
	userName: string | null
) => {
	request
		.post('/article', {
			title: values.title,
			content: values.content,
			userName: userName,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch(() => message.error('出错了'));
};
