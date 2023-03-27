import React from 'react';
import { Modal } from 'antd';
import { useCardAction } from '../hooks';

const DeleteCardModal: React.FC<{ id: string }> = (props) => {
	const { isDeleteModalOpen, handleDelete, onOpenDeleteModal } =
		useCardAction(props);
	return (
		<Modal
			title="删除卡片"
			open={isDeleteModalOpen}
			onOk={handleDelete}
			onCancel={() => onOpenDeleteModal(false)}
			okText="删除"
			cancelText="取消"
			centered
		>
			<p>确认删除这条说说吗？</p>
		</Modal>
	);
};
export default DeleteCardModal;
