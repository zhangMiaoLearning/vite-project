import { Form, message } from 'antd';
import { timeTransformation } from '../../../../../../../utils/getTime';
import { useAddCardMutation } from '../../../../../../../slice/cardApiSlice';
import { useStoreDispatch } from '../../../../../../../store/Store';
import { confirmCreat } from '../../../../../../../slice/cardSlice';

export const useAddCard = () => {
	const [form] = Form.useForm();
	const date = timeTransformation(new Date());
	const userName = sessionStorage.getItem('userName');
	const [addCard] = useAddCardMutation();
	const dispatch = useStoreDispatch();

	function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		if (values.title && date) {
			addCard({
				title: values.title,
				description: values.description,
				rate: values.rate,
				updateAt: date,
				userName: userName,
			});
			dispatch(
				confirmCreat({
					id: 'id',
					title: values.title,
					description: values.description,
					rate: values.rate,
					updateAt: date,
					userName: userName,
				})
			);
			form.resetFields();
		} else {
			message.error('请输入标题');
		}
	}

	const onCancel = () => {
		form.resetFields();
	};
	return { form, onFinish, onCancel };
};
