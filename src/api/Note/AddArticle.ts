import { request } from '../../utils/Axios/Axios';
import { message } from 'antd';

export const AddArticle = (
	values: {
		title: string;
		content: HTMLInputElement;
	},
	description: string,
	userName: string | null,
	updateAt: null | string
) => {
	request
		.post('/article', {
			title: values.title,
			content: values.content,
			description: description,
			userName: userName,
			updateAt: updateAt,
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch(() => message.error('出错了'));
};
