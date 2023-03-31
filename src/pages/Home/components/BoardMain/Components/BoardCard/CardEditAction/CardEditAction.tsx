import { PayloadAction } from '@reduxjs/toolkit';
import { Button, Form } from 'antd';
import React from 'react';
import styles from '../BoardCard.module.scss';
interface CardActionsProps {
	onCloseEdit?: () => PayloadAction<string, 'card/activeUpdate'>;
	okText: string;
	onCancel?: () => void;
}

export const CardEditActions: React.FC<CardActionsProps> = (props) => {
	return (
		<div className={styles.cardAction}>
			<Form.Item key={'save-button'} style={{ margin: 0 }}>
				<Button type="primary" htmlType="submit">
					{props.okText}
				</Button>
			</Form.Item>
			<Form.Item key={'cancel-button'} style={{ margin: 0 }}>
				<Button onClick={props.onCloseEdit}>取消</Button>
			</Form.Item>
		</div>
	);
};
