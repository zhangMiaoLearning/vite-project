import { useDispatch, useSelector } from 'react-redux';
import { timeTransformation } from '../../../../../../Utils/getTime';
import {
	useDeleteCardMutation,
	useUpdateCardMutation,
} from '../../../../../../Slice/cardApiSlice';
import { Form } from 'antd';
import {
	setDeleteId,
	setEditId,
	setIsDeleteModalOpen,
	setIsEdit,
} from '../../../../../../Slice/cardSlice';
interface BoardCardProps {
	id: string;
	title?: string;
	description?: string;
	rate?: number;
	updateAt?: string | null;
	userName?: string | null;
}
export const useCardAction = (props: BoardCardProps) => {
	const isEdit = useSelector((state: any) => state.editCard.isEdit);
	const editId = useSelector((state: any) => state.editCard.editId);
	const isDeleteModalOpen = useSelector(
		(state: any) => state.editCard.isDeleteModalOpen
	);
	const deleteId = useSelector((state: any) => state.editCard.deleteId);
	const dispatch = useDispatch();
	const onCloseEdit = () => dispatch(setIsEdit(false));
	const onOpenEdit = () => {
		dispatch(setIsEdit(true));
		dispatch(setEditId(props.id));
	};
	const onOpenDeleteModal = (newOpen: boolean) => {
		dispatch(setIsDeleteModalOpen(newOpen));
		dispatch(setDeleteId(props.id));
	};

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
		deleteCard(deleteId);
		dispatch(setIsDeleteModalOpen(false));
	}

	return {
		isEdit,
		editId,
		isDeleteModalOpen,
		dispatch,
		onCloseEdit,
		onOpenEdit,
		onOpenDeleteModal,
		form,
		currentUserName,
		onFinish,
		handleDelete,
	};
};
