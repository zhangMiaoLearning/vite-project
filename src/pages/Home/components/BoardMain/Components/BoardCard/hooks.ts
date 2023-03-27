import { useDispatch, useSelector } from 'react-redux';
import { timeTransformation } from '../../../../../../Utils/getTime';
import {
	useDeleteCardMutation,
	useUpdateCardMutation,
} from '../../../../../../Slice/apiSlice';
import { Form } from 'antd';
import {
	setIsDeleteModalOpen,
	setIsEdit,
} from '../../../../../../Slice/cardSlice';
interface BoardCardProps {
	id: string;
	title: string;
	description: string;
	rate: number;
	updateAt: string | null;
	userName: string | null;
}
export const useCardAction = (props: BoardCardProps) => {
	const isEdit = useSelector((state: any) => state.editCard.isEdit);
	const editId = useSelector((state: any) => state.editCard.editId);
	const isDeleteModalOpen = useSelector(
		(state: any) => state.editCard.isDeleteModalOpen
	);
	const dispatch = useDispatch();

	const date = timeTransformation(new Date());
	const [form] = Form.useForm();

	const currentUserName = sessionStorage.getItem('userName');
	const [updateCard] = useUpdateCardMutation();
	const [deleteCard] = useDeleteCardMutation();

	function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		updateCard({
			id: props.id,
			title: values.title,
			description: values.description,
			rate: values.rate,
			updateAt: date,
			userName: currentUserName,
		});
		dispatch(setIsEdit(false));
	}

	function handleDelete() {
		deleteCard(props.id);
		dispatch(setIsDeleteModalOpen(false));
	}

	return {
		isEdit,
		editId,
		isDeleteModalOpen,
		dispatch,
		form,
		currentUserName,
		onFinish,
		handleDelete,
	};
};
