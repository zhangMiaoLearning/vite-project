import React from 'react';
import { Card, Form, FormInstance } from 'antd';
import styles from './AddCard.module.scss';
import { CardRate } from '../CardRate/CardRate';
import { CardDescription } from '../CardDescription/CardDescription';
import { CardEditActions } from '../CardEditAction/CardEditAction';
import { CardTitle } from '../CardTitle/CardTitle';

interface AddCardProps {
	form?: FormInstance;
	onFinish: (values: {
		title: string;
		description: string;
		rate: number;
	}) => void;
	onCancel: () => void;
}
const AddCard: React.FC<AddCardProps> = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>新增一条说说</div>
			<Form form={props.form} onFinish={props.onFinish}>
				<Card
					title={<CardTitle isEdit={true} placeholder={'请输入卡片标题'} />}
					actions={[
						<CardEditActions
							key={'cardEdit'}
							okText={'添加'}
							onCancel={props.onCancel}
						/>,
					]}
				>
					<CardDescription isEdit={true} />
					<CardRate isEdit={true} />
				</Card>
			</Form>
		</div>
	);
};
export default AddCard;
