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
import {
	useStoreDispatch,
	useStoreSelector,
} from '../../../../../../Store/Store';
interface BoardCardProps {
	id: string;
	title?: string;
	description?: string;
	rate?: number;
	updateAt?: string | null;
	userName?: string | null;
}
export const useCardAction = (props: BoardCardProps) => {
	const dispatch = useStoreDispatch();

	const onOpenDeleteModal = (newOpen: boolean) => {
		dispatch(activeDelete({ id: props.id, isDeleteModalOpen: newOpen }));
	};
	const isDeleteModalOpen = useStoreSelector(
		(state) => state.card.isDeleteModalOpen
	);
	const deleteId = useStoreSelector((state) => state.card.deleting.id);
	const [deleteCard] = useDeleteCardMutation();

	const onOpenEdit = () => {
		dispatch(activeUpdate(props.id));
	};
	const currentUserName = sessionStorage.getItem('userName');
	const editId = useStoreSelector((state) => state.card.editing.id);
	const isEdit = editId === props.id;
	const isUser = props.userName === currentUserName;
	const onCloseEdit = () => dispatch(activeUpdate(''));

	const date = timeTransformation(new Date());
	const [form] = Form.useForm();
	const [updateCard] = useUpdateCardMutation();

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
		dispatch(activeDelete({ id: '', isDeleteModalOpen: false }));
	}

	return {
		deleteId,
		editId,
		isEdit,
		isUser,
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
