import React from 'react';
import { Modal } from 'antd';
interface DeleteModalProps {
	isDeleteModalOpen: boolean;
	handleDelete: () => void;
	onOpenDeleteModal: (newOpen: boolean) => void;
}
const DeleteCardModal: React.FC<DeleteModalProps> = (props) => {
	return (
		<Modal
			title="删除卡片"
			open={props.isDeleteModalOpen}
			onOk={props.handleDelete}
			onCancel={() => props.onOpenDeleteModal(false)}
			okText="删除"
			cancelText="取消"
			centered
		>
			<p>确认删除这条说说吗？</p>
		</Modal>
	);
};
export default DeleteCardModal;
