import { useDispatch, useSelector } from 'react-redux';
import { timeTransformation } from '../../../../../../Utils/getTime';
import {
	useDeleteCardMutation,
	useUpdateCardMutation,
} from '../../../../../../Slice/cardApiSlice';
import { Form } from 'antd';
import {
	activeDelete,
	activeUpdate,
	confirmDelete,
	confirmUpdate,
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
	const editId = useSelector((state: any) => state.card.editing.id);
	const isDeleteModalOpen = useSelector(
		(state: any) => state.card.isDeleteModalOpen
	);
	const deleteId = useSelector((state: any) => state.card.deleting.id);
	const dispatch = useDispatch();
	const onCloseEdit = () => dispatch(activeUpdate(''));
	const onOpenEdit = () => {
		dispatch(activeUpdate(props.id));
	};
	const onOpenDeleteModal = (newOpen: boolean) => {
		dispatch(activeDelete({ id: props.id, isDeleteModalOpen: newOpen }));
	};

	const date = timeTransformation(new Date());
	const [form] = Form.useForm();

	const currentUserName = sessionStorage.getItem('userName');
	const [updateCard] = useUpdateCardMutation();
	const [deleteCard] = useDeleteCardMutation();

	async function onFinish(values: {
		title: string;
		description: string;
		rate: number;
	}) {
		const x = await updateCard({
			id: props.id,
			title: values.title,
			description: values.description,
			rate: values.rate,
			updateAt: date,
			userName: currentUserName,
		});
		console.log(x);
		if (date) {
			dispatch(
				confirmUpdate({
					id: props.id,
					title: values.title,
					description: values.description,
					rate: values.rate,
					updateAt: date,
					userName: currentUserName,
				})
			);
		}
		dispatch(activeUpdate(''));
	}

	function handleDelete() {
		dispatch(confirmDelete(deleteId));
		deleteCard(deleteId);
		dispatch(activeDelete({ id: deleteId, isDeleteModalOpen: false }));
	}

	return {
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
