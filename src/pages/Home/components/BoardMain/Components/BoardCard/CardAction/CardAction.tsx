import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from '../BoardCard.module.scss';

interface CardActionProps {
	onOpenEdit: () => void;
	onOpenDeleteModal: (newOpen: boolean) => void;
}
export const CardAction: React.FC<CardActionProps> = (props) => {
	return (
		<div className={styles.cardAction}>
			<EditOutlined key="edit" onClick={props.onOpenEdit} />
			<DeleteOutlined
				key={'delete-button'}
				onClick={() => props.onOpenDeleteModal(true)}
			/>
		</div>
	);
};
