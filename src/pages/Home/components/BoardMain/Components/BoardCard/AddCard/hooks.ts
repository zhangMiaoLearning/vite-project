import { Form, message } from 'antd';
import { timeTransformation } from '../../../../../../../Utils/getTime';
import { useAddCardMutation } from '../../../../../../../Slice/cardApiSlice';
import { useStoreDispatch } from '../../../../../../../Store/Store';
import { confirmCreat } from '../../../../../../../Slice/cardSlice';

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
